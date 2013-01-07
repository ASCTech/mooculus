class ExercisesController < ApplicationController
  before_filter(:except => [:index]) do 
    redirect_to user_omniauth_authorize_path(:coursera) unless current_user
  end

  def index
    @exercises = Exercise.order(:position)
    @competencies = current_user.competencies if user_signed_in?
    @exercises_by_weeks = (Exercise.order(:position).group_by &:week)
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

    conditions = {
      :user_id => current_user.id,
      :exercise_id => @exercise.id }
    
    @competency = Competency.where(conditions).limit(1).first
  end

  def update
  end

  def destroy
  end

  def progress
    unless user_signed_in?
      redirect_to user_omniauth_authorize_path(:coursera)
      return 
    end

    exercises = Exercise.order(:position)
    completed_exercises = 
      current_user.competencies.order(:estimate).reverse_order.map { |c| c.exercise }
    incomplete_exercises = exercises - completed_exercises
    @exercises = completed_exercises + incomplete_exercises
    @competencies = Competency
    @exercises_by_weeks = (completed_exercises.group_by &:week)
  end

end
