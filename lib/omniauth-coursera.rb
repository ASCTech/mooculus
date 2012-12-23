require 'omniauth-oauth'

module OmniAuth
  module Strategies
    class Coursera < OmniAuth::Strategies::OAuth
      option :name, "coursera"

      # This is where you pass the options you would pass when
      # initializing your consumer from the OAuth gem.
      option :client_options, {
        :site => 'https://authentication.coursera.org',
        :request_token_path => '/auth/oauth/api/request_token',
        :access_token_path => '/auth/oauth/api/access_token',
        :authorize_url => nil # this will be set during the request_phase
      }

      option :fields, ["id", "name", "subtitles_access"]

      # These are called after authentication has succeeded. If
      # possible, you should try to set the UID without making
      # additional calls (if the user id is returned with the token
      # or as a URI parameter). This may not be possible with all
      # providers.
      uid{ raw_info['id'] }

      info do
        {
          'id' => raw_info['id'],
          'name' => raw_info['full_name'],
          'subtitles_access' => raw_info['subtitles_access']
        }
      end

      extra do
        {
          'raw_info' => raw_info
        }
      end


      def request_phase
        request_token = consumer.get_request_token({:oauth_callback => callback_url}, options.request_params)
        session['oauth'] ||= {}

        token = request_token.params['oauth_token']
        secret = request_token.params['oauth_secret']

        session['oauth'][name.to_s] = {
          'callback_confirmed' => request_token.callback_confirmed?,
          'request_token' => token,
          'request_secret' => secret}

        # Coursera apparently doesn't have a fixed authentication_url and instead sends us one here
        authentication_url = request_token.params['authentication_url']
        params = { :oauth_token => request_token.token }

        uri = URI.parse(authentication_url)
        uri.query = params.map { |k,v| [k, CGI.escape(v)] * "=" } * "&"
        redirect uri.to_s

      rescue ::Timeout::Error => e
        fail!(:timeout, e)
      rescue ::Net::HTTPFatalError, ::OpenSSL::SSL::SSLError => e
        fail!(:service_unavailable, e)
      end


      def callback_phase
        raise OmniAuth::NoSessionError.new("Session Expired") if session['oauth'].nil?
        
        request_token = ::OAuth::RequestToken.new(consumer,
                                                  session['oauth'][name.to_s].delete('request_token'),
                                                  session['oauth'][name.to_s].delete('request_secret'))

        opts = {}
        opts[:oauth_verifier] = request['oauth_verifier']

        @access_token = request_token.get_access_token(opts)

        self.env['omniauth.auth'] = auth_hash
        call_app!

      rescue ::Timeout::Error => e
        fail!(:timeout, e)
      rescue ::Net::HTTPFatalError, ::OpenSSL::SSL::SSLError => e
        fail!(:service_unavailable, e)
      rescue ::OAuth::Unauthorized => e
        fail!(:invalid_credentials, e)
      rescue ::MultiJson::DecodeError => e
        fail!(:invalid_response, e)
      rescue ::OmniAuth::NoSessionError => e
        fail!(:session_expired, e)
      end

      def raw_info
        # FIXME: multiJSON is recommended over JSON for some reason?
        @raw_info ||= JSON.parse(access_token.get('/auth/oauth/api/get_identity').body)
      end
    end
  end
end
