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

task :staging do
  set :rails_env, "staging"
  set :ssh_options, { :port => 22 }
  role :app, "apps-s.asc.ohio-state.edu"
  role :web, "apps-s.asc.ohio-state.edu"
  role :db,  "apps-s.asc.ohio-state.edu", :primary => true
end

task :production do
  set :rails_env, "production"
  set :branch, 'master'
  role :app, "mooculus-1.asc.ohio-state.edu"
  role :app, "mooculus-2.asc.ohio-state.edu"
  role :web, "mooculus-1.asc.ohio-state.edu"
  role :web, "mooculus-2.asc.ohio-state.edu"
  role :db,  "mooculus-1.asc.ohio-state.edu", :primary => true
end

namespace :deploy do
  task :start do ; end
  task :stop do ; end
  task :restart, :roles => :app, :except => { :no_release => true } do
    run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
  end

  task :seed, :roles => :app do
    run "cd #{current_path} && #{rake} RAILS_ENV=#{rails_env} db:migrate"
    run "cd #{current_path} && #{rake} RAILS_ENV=#{rails_env} db:seed"
    run "cd #{current_path} && #{rake} RAILS_ENV=#{rails_env} exercise:all"
  end
end

before "deploy:assets:precompile" do
  run [
    "ln -nfs #{shared_path}/config/database.yml #{release_path}/config/database.yml",
    "ln -nfs #{shared_path}/config/piwik.yml #{release_path}/config/piwik.yml",
    "ln -nfs #{shared_path}/config/secret_token.rb #{release_path}/config/initializers/secret_token.rb",
    "ln -nfs #{shared_path}/config/newrelic.yml #{release_path}/config/newrelic.yml",
    "ln -fs #{shared_path}/uploads #{release_path}/uploads",
    "ln -fs #{shared_path}/tmp/pids #{release_path}/tmp/pids",
    "rm #{release_path}/public/system"
  ].join(" && ")
end

after "deploy:restart", "deploy:cleanup"

desc "tail log files"
task :tail, :roles => :app do
  run "tail -f #{shared_path}/log/#{rails_env}.log" do |channel, stream, data|
    puts "#{channel[:host]}: #{data}"
    break if stream == :err
  end
end

