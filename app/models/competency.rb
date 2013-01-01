class Competency < ActiveRecord::Base
  attr_accessible :estimate, :exercise_id, :uncertainty, :user_id
  belongs_to :user
  belongs_to :exercise
end
