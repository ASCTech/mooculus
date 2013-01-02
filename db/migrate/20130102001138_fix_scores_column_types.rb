class FixScoresColumnTypes < ActiveRecord::Migration
  def up
    change_table :scores do |t|
      t.change :attempt_content, :string
      t.change :time_taken, :integer
    end
  end

  def down
    change_table :scores do |t|
      t.change :attempt_content, :boolean
      t.change :time_taken, :time
    end
  end
end


