class AddUserIdToScore < ActiveRecord::Migration
  def change
    add_column :scores, :user_id, :integer
  end
end
