class RemoveProblemNumbers < ActiveRecord::Migration
  def up
    remove_column :exercises, :problem_number
  end

  def down
    add_column :exercises, :problem_number, :integer
  end
end
