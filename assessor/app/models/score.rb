class Score < ActiveRecord::Base
  attr_accessible :points

  belongs_to :exercise
  belongs_to :user
end
