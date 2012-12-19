class AddExerciseIdToScore < ActiveRecord::Migration
  def change
    add_column :scores, :exercise_id, :integer
  end
end
