class ExercisesController < ApplicationController

  def khan_site
  end

  def khan_exercise
  end

  def index
    @exercises = Exercise.all
    @competencies = current_user.competencies if user_signed_in?
  end

  def create
    @exercise = Exercise.new(params[:exercise])

    respond_to do |format|
      if @exercise.save
        format.html { redirect_to @exercise, :notice => 'Exercise was successfully created.' }
        format.json { render :json => @exercise, :status => :created, :location => @exercise }
      else
        format.html { render :action => "new" }
        format.json { render :json => @exercise.errors, :status => :unprocessable_entity }
      end
    end
  end

  def new
    @exercise = Exercise.new
  end

  def edit
  end

  def show
    @exercise = Exercise.find(params[:id])
    @problem = @exercise.problem_from_bag
  end

  def update
  end

  def destroy
  end
end
