module ExercisesHelper
  def progress_on(exercise)
    competency = @competencies.find_by_exercise_id(exercise.id)
    progress = (competency.max_estimate * 100).round
    modifier = case progress
               when 0..50 then " bar-danger"
               when 51..80 then " bar-warning"
               else " bar-success"
               end

    %(<div class="bar#{modifier}" style="width: #{progress}%;"></div>)
  end
end
