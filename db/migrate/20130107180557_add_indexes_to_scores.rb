class AddIndexesToScores < ActiveRecord::Migration
  def change
    add_index :scores, ['user_id', 'complete']
    add_index :scores, ['user_id', 'complete', 'count_hints']
  end
end
