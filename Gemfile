source 'https://rubygems.org'

gem 'rails'

gem 'sqlite3', :group => [:test, :development]
gem 'mysql2',  :group => [:production, :staging]
#gem 'mongoid'

gem 'jquery-rails'
gem 'json'

# To use OAuth login
gem "oauth-plugin", "~> 0.4.0"

gem 'twitter-bootstrap-rails'
gem 'less-rails'
gem 'newrelic_rpm'

# use Devise for login
gem 'devise'
gem 'omniauth'
gem 'omniauth-oauth'

# use Nokogiri to parse the exercise files
gem 'nokogiri'

group :development do
  gem 'capistrano'
  gem 'rvm-capistrano'
  gem 'thin'
end

group :test do
  gem 'factory_girl_rails'
end

group :staging, :production do
  gem 'libv8'
  gem 'piwik_analytics', '~> 1.0.1'
end

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  gem 'therubyracer'

  gem 'uglifier', '>= 1.0.3'
  gem 'turbo-sprockets-rails3'
end

# badges for our users
gem 'merit'

# I like ambry for storing some static data
gem 'ambry'

# Use gravatar's on profile pages
gem 'gravatar_image_tag'
