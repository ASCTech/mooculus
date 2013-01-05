class AddLotsToUsers < ActiveRecord::Migration
  def change
    add_column :users, :osu_name_dot_number, :string
    add_column :users, :most_recent_ip, :string
    add_column :users, :gender, :string
    add_column :users, :birthday, :date
    add_column :users, :location, :string
    add_column :users, :consent, :boolean, :default => false
    add_column :users, :consented_at, :timestamp
  end
end
