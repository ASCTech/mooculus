class ExercisesController < ApplicationController

  def index
    @exercises = Exercise.all
  end

  def create
    @exercise = Exercise.new(params[:exercise])

    respond_to do |format|
      if @exercise.save
        format.html { redirect_to @exercise, notice: 'Exercise was successfully created.' }
        format.json { render json: @exercise, status: :created, location: @exercise }
      else
        format.html { render action: "new" }
        format.json { render json: @exercise.errors, status: :unprocessable_entity }
      end
    end
  end

  def new
    @exercise = Exercise.new
  end

  def edit
  end

  def show
  end

  def update
  end

  def destroy
  end
end
