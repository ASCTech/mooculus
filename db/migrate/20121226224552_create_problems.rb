class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.string :name
      t.references :exercise

      t.timestamps
    end
    add_index :problems, :exercise_id
  end
end
