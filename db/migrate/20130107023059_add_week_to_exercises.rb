class AddWeekToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :week, :integer
  end
end
