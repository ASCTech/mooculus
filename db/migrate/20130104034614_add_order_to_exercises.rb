class AddOrderToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :order, :integer
  end
end
