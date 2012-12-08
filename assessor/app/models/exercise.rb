class Exercise < ActiveRecord::Base
  attr_accessible :title, :description, :page, :problem_number
  has_many :scores, :dependent => :destroy
end
