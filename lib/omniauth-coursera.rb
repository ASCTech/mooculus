require 'omniauth-oauth'

module OmniAuth
  module Strategies
    class Coursera < OmniAuth::Strategies::OAuth
      # Give your strategy a name.
      option :name, "coursera"

      # This is where you pass the options you would pass when
      # initializing your consumer from the OAuth gem.
      option :client_options, {
        :site => 'https://authentication.coursera.org',
        :request_token_path => '/auth/oauth/api/request_token',
        :access_token_path => '/auth/oauth/api/access_token',
        :authorize_url => 'https://authentication.coursera.org/auth/oauth/api/'
      }

      option :fields, ["id"]

      # These are called after authentication has succeeded. If
      # possible, you should try to set the UID without making
      # additional calls (if the user id is returned with the token
      # or as a URI parameter). This may not be possible with all
      # providers.
      uid{ raw_info['id'] }

      info do
        {
        }
      end

      extra do
        {
          'raw_info' => raw_info
        }
      end

      def raw_info
        @raw_info ||= MultiJson.decode(access_token.get('/auth/oauth/api/get_identity')).body
        puts "################################################################"
        puts "@raw_info = #{@raw_info}"
      end
    end
  end
end
