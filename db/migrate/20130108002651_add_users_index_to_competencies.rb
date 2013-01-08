class AddUsersIndexToCompetencies < ActiveRecord::Migration
  def change
    add_index :competencies, ['user_id', 'exercise_id']
  end
end
