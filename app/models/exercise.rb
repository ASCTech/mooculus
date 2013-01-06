class Exercise < ActiveRecord::Base
  attr_accessible :title, :description, :page, :problem_number
  has_many :scores, :dependent => :destroy
  has_many :problems, :dependent => :destroy
  has_many :competencies, :dependent => :destroy

  def Exercise.first_by_position
    Exercise.where('position IS NOT NULL').order( :position ).limit(1).first
  end

  def Exercise.last_by_position
    Exercise.where('position IS NOT NULL').order( 'position DESC' ).limit(1).first
  end

  def name
    self.page.gsub( /.html$/, '' )
  end

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

  def next_exercise
    return nil if self.position.nil?
    Exercise.where( "position > #{self.position}" ).order( :position ).limit(1).first
  end

  def previous_exercise
    return nil if self.position.nil?
    Exercise.where( "position < #{self.position}" ).order( 'position DESC' ).limit(1).first
  end
end
