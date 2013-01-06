class Problem < ActiveRecord::Base
  belongs_to :exercise
  attr_accessible :name, :weight

  def khan_exercise_object
    {
      :problemType => self.name,
      :exerciseModel => {
        :name => self.exercise.name,
        :displayName => self.exercise.title,
        :fileName => self.exercise.page
      }
    }
  end
end
