class CreateHandouts < ActiveRecord::Migration
  def change
    create_table :handouts do |t|
      t.string :title
      t.string :url
      t.integer :order
      t.integer :week

      t.timestamps
    end
  end
end
