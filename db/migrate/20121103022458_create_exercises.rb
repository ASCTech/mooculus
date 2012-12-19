class CreateExercises < ActiveRecord::Migration
  def change
    create_table :exercises do |t|
      t.string :title
      t.text :description
      t.string :page

      t.timestamps
    end
  end
end
