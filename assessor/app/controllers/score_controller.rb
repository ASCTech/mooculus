class ScoreController < ApplicationController
  respond_to :json

#  Parameters: {"topic_mode"=>"0", "time_taken"=>"1", "custom_stack_id"=>"-1", "review_mode"=>"0", "casing"=>"camel", "stack_uid"=>"-1", "card"=>"{\"exerciseName\":\"point_slope_form\"}", "problem_type"=>"two-points", "seed"=>"146", "exercise"=>"point_slope_form", "cards_left"=>"-1", "attempt_number"=>"0", "complete"=>"0", "count_hints"=>"1", "topic_id"=>"", "attempt_content"=>"hint", "problem"=>"1", "cards_done"=>"0"}
  def hint
  end

  #   Parameters: {"topic_mode"=>"0", "time_taken"=>"4", "custom_stack_id"=>"-1", "review_mode"=>"0", "casing"=>"camel", "stack_uid"=>"-1", "card"=>"{\"exerciseName\":\"point_slope_form\"}", "problem_type"=>"slope-intercept", "seed"=>"16", "exercise"=>"point_slope_form", "cards_left"=>"-1", "attempt_number"=>"1", "complete"=>"0", "count_hints"=>"0", "topic_id"=>"", "attempt_content"=>"[[\"1\",\"1\",\"1\"]]", "problem"=>"1", "cards_done"=>"0"}

#  Parameters: {"topic_mode"=>"0", "time_taken"=>"35", "custom_stack_id"=>"-1", "review_mode"=>"0", "casing"=>"camel", "stack_uid"=>"-1", "card"=>"{\"exerciseName\":\"point_slope_form\"}", "problem_type"=>"two-points", "seed"=>"146", "exercise"=>"point_slope_form", "cards_left"=>"-1", "attempt_number"=>"1", "complete"=>"1", "count_hints"=>"2", "topic_id"=>"", "attempt_content"=>"[[\"4\",\"-1\",\"-2\"]]", "problem"=>"1", "cards_done"=>"0"}

  def attempt
  end
end
