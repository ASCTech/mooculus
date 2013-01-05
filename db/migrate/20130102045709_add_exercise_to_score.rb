class AddExerciseToScore < ActiveRecord::Migration
  def change
    add_column :scores, :exercise_id, :reference
  end
end
