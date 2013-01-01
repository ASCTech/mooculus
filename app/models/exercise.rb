class Exercise < ActiveRecord::Base
  attr_accessible :title, :description, :page, :problem_number
  has_many :scores, :dependent => :destroy
  has_many :problems, :dependent => :destroy
  has_many :competencies, :dependent => :destroy
end
