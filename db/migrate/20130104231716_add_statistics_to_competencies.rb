class AddStatisticsToCompetencies < ActiveRecord::Migration
  def change
    add_column :competencies, :max_estimate, :float
    add_column :competencies, :min_estimate, :float
  end
end
