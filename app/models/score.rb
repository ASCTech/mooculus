class Score < ActiveRecord::Base
  attr_accessible :time_taken, :attempt_number, :complete, :count_hints, :seed,
    :attempt_content
  belongs_to :problem
  belongs_to :exercise
  belongs_to :user

  def summary
    return :hint if self.attempt_content == "hint"
    return :ace if self.attempt_number == 1 and self.complete == true and self.count_hints == 0
    return :correct if self.complete == true
    return :incorrect if self.complete == false
  end
end
