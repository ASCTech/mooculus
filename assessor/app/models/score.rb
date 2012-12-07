class Score < ActiveRecord::Base
  attr_accessible :time_taken, :attempt_number, :complete, :count_hints, :seed
  belongs_to :exercise
  belongs_to :user
end
