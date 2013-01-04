class ChangeOrderToPositionExercise < ActiveRecord::Migration
  def up
    rename_column :exercises, :order, :position
  end

  def down
    rename_column :exercises, :position, :order
  end
end
