class Exercise < ActiveRecord::Base
  attr_accessible :description, :page, :title
  attr_accessible :problem_number

  has_many :scores, :dependent => :destroy
end
