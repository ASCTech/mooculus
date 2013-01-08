class AddIndexToMeritActionsProcessed < ActiveRecord::Migration
  def change
    add_index :merit_actions, :processed
  end
end
