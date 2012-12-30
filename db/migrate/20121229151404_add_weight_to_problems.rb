class AddWeightToProblems < ActiveRecord::Migration
  def change
    add_column :problems, :weight, :integer
  end
end
