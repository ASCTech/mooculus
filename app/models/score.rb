class Score < ActiveRecord::Base
  attr_accessible :time_taken, :attempt_number, :complete, :count_hints, :seed,
    :attempt_content
  belongs_to :problem
  belongs_to :user
end
