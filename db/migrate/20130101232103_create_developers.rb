class CreateDevelopers < ActiveRecord::Migration
  def change
    create_table :developers do |t|
      t.string :name
      t.string :photo
      t.string :description
      t.string :link
      t.string :email

      t.timestamps
    end
  end
end
