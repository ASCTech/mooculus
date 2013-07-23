class AddModelParametersToExercises < ActiveRecord::Migration
  def change
    add_column :exercises, :prior_knowing, :float
    add_column :exercises, :prior_unknowing, :float
    add_column :exercises, :knowing_knowing, :float
    add_column :exercises, :knowing_unknowing, :float
    add_column :exercises, :unknowing_knowing, :float
    add_column :exercises, :unknowing_unknowing, :float
    add_column :exercises, :knowing_ace, :float
    add_column :exercises, :knowing_correct, :float
    add_column :exercises, :knowing_incorrect, :float
    add_column :exercises, :knowing_hint, :float
    add_column :exercises, :unknowing_ace, :float
    add_column :exercises, :unknowing_correct, :float
    add_column :exercises, :unknowing_incorrect, :float
    add_column :exercises, :unknowing_hint, :float
  end
end
