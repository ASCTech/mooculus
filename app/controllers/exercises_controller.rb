class ExercisesController < ApplicationController

  def khan_site
  end

  def khan_exercise
  end

  def index
    @exercises = Exercise.order(:position)
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
    if /[a-z]/i =~ params[:id]
      page = "#{params[:id]}.html".downcase
      @exercise = Exercise.find(:first, 
                                :conditions => ["lower(page) = ?", page])
    else
      @exercise = Exercise.find(params[:id])
    end
    @problem = @exercise.problem_from_bag

    flash[:notice] = "#{@exercise.inspect}, #{@problem.inspect}"
  end

  def update
  end

  def destroy
  end

  def progress
    unless user_signed_in?
      redirect_to user_omniauth_authorize_path(:coursera)
      flash[:notice] = "Please login"
      return 
    end

    exercises = Exercise.order(:position)
    completed_exercises = 
      current_user.competencies.order(:estimate).reverse_order.map { |c| c.exercise }
    incomplete_exercises = exercises - completed_exercises
    @exercises = completed_exercises + incomplete_exercises
    @competencies = Competency
  end

end
