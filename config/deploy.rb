require 'bundler/capistrano'
require 'rvm/capistrano'

set :rvm_ruby_string, ENV['GEM_HOME'].gsub(/.*\//,"").gsub(/-p\d+/,"")

set :keep_releases, 11

set :use_sudo, false
set :application, "mooculus"

set :deploy_to, "/var/www/apps/#{application}"

set :scm, :git
set :repository, "git@github.com:ASCTech/mooculus.git"
set :branch, "master"
set :branch, $1 if `git branch` =~ /\* (\S+)\s/m
set :deploy_via, :remote_cache

set :user, 'deploy'
set :ssh_options, { :forward_agent => true, :port => 2200 }

task :staging do
  set :rails_env, "staging"
  role :app, "ruby-test.asc.ohio-state.edu"
  role :web, "ruby-test.asc.ohio-state.edu"
  role :db,  "ruby-test.asc.ohio-state.edu", :primary => true
end

task :production do
  set :rails_env, "production"
  set :branch, 'master'
  role :app, "mooculus-1.asc.ohio-state.edu"
  role :web, "mooculus-1.asc.ohio-state.edu"
  role :db,  "mooculus-1.asc.ohio-state.edu", :primary => true
end

namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end

  task :seed, :roles => :app do
    run "cd #{current_path} && #{rake} RAILS_ENV=#{rails_env} db:seed"
  end
end

before "deploy:assets:precompile" do
  run [
    "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml",
    "ln -nfs #{shared_path}/config/secret_token.rb #{release_path}/config/initializers/secret_token.rb",
    "ln -fs #{shared_path}/uploads #{release_path}/uploads",
    "ln -fs #{shared_path}/tmp/pids #{release_path}/tmp/pids",
    "rm #{release_path}/public/system"
  ].join(" && ")
end

after "deploy:restart", "deploy:cleanup"
