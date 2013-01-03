class HandoutsController < ApplicationController
  # GET /handouts
  # GET /handouts.json
  def index
    @handouts = Handout.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @handouts }
    end
  end

  # GET /handouts/1
  # GET /handouts/1.json
  def show
    @handout = Handout.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @handout }
    end
  end

  # GET /handouts/new
  # GET /handouts/new.json
  def new
    @handout = Handout.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @handout }
    end
  end

  # GET /handouts/1/edit
  def edit
    @handout = Handout.find(params[:id])
  end

  # POST /handouts
  # POST /handouts.json
  def create
    @handout = Handout.new(params[:handout])

    respond_to do |format|
      if @handout.save
        format.html { redirect_to @handout, notice: 'Handout was successfully created.' }
        format.json { render json: @handout, status: :created, location: @handout }
      else
        format.html { render action: "new" }
        format.json { render json: @handout.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /handouts/1
  # PUT /handouts/1.json
  def update
    @handout = Handout.find(params[:id])

    respond_to do |format|
      if @handout.update_attributes(params[:handout])
        format.html { redirect_to @handout, notice: 'Handout was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @handout.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /handouts/1
  # DELETE /handouts/1.json
  def destroy
    @handout = Handout.find(params[:id])
    @handout.destroy

    respond_to do |format|
      format.html { redirect_to handouts_url }
      format.json { head :no_content }
    end
  end
end
