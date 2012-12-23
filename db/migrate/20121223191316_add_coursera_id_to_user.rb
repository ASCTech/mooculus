class AddCourseraIdToUser < ActiveRecord::Migration
  def change
    add_column :users, :coursera_id, :string
  end
end
