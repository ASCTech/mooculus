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
    @score.user = @user

    respond_to do |format|
      if @score.save
#        format.html { redirect_to @user, :notice => 'Score was successfully created.' }
        format.json { render :json => @score, :status => :created } # , :location => @score }
      else
#        format.html { render :action => "new" }
        format.json { render :json => @score.errors, :status => :unprocessable_entity }
      end
    end
  end

#  Parameters: {"topic_mode"=>"0", "time_taken"=>"1", "custom_stack_id"=>"-1", "review_mode"=>"0", "casing"=>"camel", "stack_uid"=>"-1", "card"=>"{\"exerciseName\":\"point_slope_form\"}", "problem_type"=>"two-points", "seed"=>"146", "exercise"=>"point_slope_form", "cards_left"=>"-1", "attempt_number"=>"0", "complete"=>"0", "count_hints"=>"1", "topic_id"=>"", "attempt_content"=>"hint", "problem"=>"1", "cards_done"=>"0"}
  def hint
    self.create
  end

  #   Parameters: {"topic_mode"=>"0", "time_taken"=>"4", "custom_stack_id"=>"-1", "review_mode"=>"0", "casing"=>"camel", "stack_uid"=>"-1", "card"=>"{\"exerciseName\":\"point_slope_form\"}", "problem_type"=>"slope-intercept", "seed"=>"16", "exercise"=>"point_slope_form", "cards_left"=>"-1", "attempt_number"=>"1", "complete"=>"0", "count_hints"=>"0", "topic_id"=>"", "attempt_content"=>"[[\"1\",\"1\",\"1\"]]", "problem"=>"1", "cards_done"=>"0"}

#  Parameters: {"topic_mode"=>"0", "time_taken"=>"35", "custom_stack_id"=>"-1", "review_mode"=>"0", "casing"=>"camel", "stack_uid"=>"-1", "card"=>"{\"exerciseName\":\"point_slope_form\"}", "problem_type"=>"two-points", "seed"=>"146", "exercise"=>"point_slope_form", "cards_left"=>"-1", "attempt_number"=>"1", "complete"=>"1", "count_hints"=>"2", "topic_id"=>"", "attempt_content"=>"[[\"4\",\"-1\",\"-2\"]]", "problem"=>"1", "cards_done"=>"0"}

  def attempt
    self.create
  end
end
