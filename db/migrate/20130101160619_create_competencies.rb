class CreateCompetencies < ActiveRecord::Migration
  def change
    create_table :competencies do |t|
      t.float :estimate
      t.float :uncertainty
      t.integer :user_id
      t.integer :exercise_id

      t.timestamps
    end
  end
end
