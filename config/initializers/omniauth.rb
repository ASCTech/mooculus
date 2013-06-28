Rails.application.config.middleware.use OmniAuth::Builder do
#  provider :developer unless Rails.env.production?
#  provider :google_oauth2, ENV["GOOGLE_KEY"], ENV["GOOGLE_SECRET"]
#    {
#      :scope => "userinfo.email,userinfo.profile,analytics.readonly",
#      :approval_prompt => "auto"
#    }
end
