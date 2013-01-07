# khan-exercise sends JSON with parameters like
# 
# {"topic_mode"=>"0", "time_taken"=>"1", "custom_stack_id"=>"-1", "review_mode"=>"0", "casing"=>"camel", "stack_uid"=>"-1", "card"=>"{\"exerciseName\":\"point_slope_form\"}", "problem_type"=>"two-points", "seed"=>"146", "exercise"=>"point_slope_form", "cards_left"=>"-1", "attempt_number"=>"0", "complete"=>"0", "count_hints"=>"1", "topic_id"=>"", "attempt_content"=>"hint", "problem"=>"1", "cards_done"=>"0"}

class ScoreController < ApplicationController
  respond_to :json

  def create
    @exercise = Exercise.find_by_page(params[:exercise] + ".html")
    @problem = @exercise.problems.find_by_name( params[:problem_type] )

    puts @exercise.inspect
    puts @problem.inspect
    
    @user = current_user
    @score = Score.new(:time_taken => params[:time_taken],
                       :attempt_number => params[:attempt_number],
                       :complete => (params[:complete] != "0"),
                       :count_hints => params[:count_hints],
                       :attempt_content => params[:attempt_content],
                       :seed => params[:seed])
    @score.problem = @problem
    @score.exercise = @exercise
    @score.user = @user

    puts @score.summary

    @competency = Competency.update( @user, @exercise )
    p = @competency.estimate

    @next_exercise = @exercise.next_exercise || @exercise

    @next_problem = nil
    if p > 0.8
      @next_problem = @next_exercise.problem_from_bag
    else
      @next_problem = @exercise.problem_from_bag
    end

    khan = @next_problem.khan_exercise_object
    khan[:repeatProblem] = @exercise.problem_from_bag.khan_exercise_object
    khan[:competency] = @competency.max_estimate

    @forward_exercise = @exercise.next_exercise
    khan[:forwardProblem] = false
    khan[:forwardProblem] = @forward_exercise.name unless @forward_exercise.nil?

    @backward_exercise = @exercise.previous_exercise
    khan[:backwardProblem] = false
    khan[:backwardProblem] = @backward_exercise.name unless @backward_exercise.nil?

    respond_to do |format|
      @score.save
      format.json { render :json => khan, :status => :created }
    end
  end

  def hint
    self.create
  end

  def attempt
    self.create
  end
end
