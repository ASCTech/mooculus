class AddProblemNumberToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :problem_number, :integer
  end
end
