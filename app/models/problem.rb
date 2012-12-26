class Problem < ActiveRecord::Base
  belongs_to :exercise
  attr_accessible :name
end
