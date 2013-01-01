class Exercise < ActiveRecord::Base
  attr_accessible :title, :description, :page, :problem_number
  has_many :scores, :dependent => :destroy
  has_many :problems, :dependent => :destroy

  def total_weight
    problems.sum(:weight)
  end

  def problem_from_bag
    index = rand(self.total_weight)
    for problem in problems do
      index = index - problem.weight
      if index < 0 
        return problem
      end
    end
    return nil
  end
end
