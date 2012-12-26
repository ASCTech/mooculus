class ScoresLinkToProblemsNotExercises < ActiveRecord::Migration
  def up
    remove_column :scores, :exercise_id
    add_column :scores, :problem_id, :integer
  end

  def down
    add_column :scores, :exercise_id, :integer
    remove_column :scores, :problem_id
  end
end
