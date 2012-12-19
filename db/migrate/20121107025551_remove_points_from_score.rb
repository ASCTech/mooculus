class RemovePointsFromScore < ActiveRecord::Migration
  def up
    remove_column :scores, :points
  end

  def down
    add_column :scores, :points, :integer
  end
end
