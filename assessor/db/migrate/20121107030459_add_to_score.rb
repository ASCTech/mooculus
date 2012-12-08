class AddToScore < ActiveRecord::Migration
  def change
    add_column :scores, :time_taken, :time
    add_column :scores, :attempt_number, :integer
    add_column :scores, :complete, :boolean
    add_column :scores, :count_hints, :integer
    add_column :scores, :attempt_content, :boolean
    add_column :scores, :seed, :integer
  end
end
