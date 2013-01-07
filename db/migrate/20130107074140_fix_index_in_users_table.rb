class FixIndexInUsersTable < ActiveRecord::Migration
  def up
    add_index "users", ["coursera_id"], :name => "index_users_on_coursera_id", :unique => true
    remove_index('users', :name => "index_users_on_email")
    add_index "users", ["email"], :name => "index_users_on_email"
  end

  def down
    remove_index('users', :name => "index_users_on_email")
    add_index "users", ["email"], :name => "index_users_on_email"
    remove_index('users', :name => "index_users_on_coursera_id")
  end
end
