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

# use Devise for login
gem 'devise'
gem 'omniauth'
gem 'omniauth-oauth'

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
end

group :assets do
  gem 'sass-rails',   '~> 3.2.3'
  gem 'coffee-rails', '~> 3.2.1'

  gem 'therubyracer'

  gem 'uglifier', '>= 1.0.3'
  gem 'turbo-sprockets-rails3'
end

# better timeouts
# gem "system_timer", "~> 1.2.4"
