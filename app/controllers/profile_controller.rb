class ProfileController < ApplicationController
  def display
    unless user_signed_in?
      redirect_to user_omniauth_authorize_path(:coursera)
      return 
    end
    @user = current_user
  end
  
  def edit
    unless user_signed_in?
      redirect_to user_omniauth_authorize_path(:coursera)
      return 
    end
    @user = current_user
  end

  def update
    unless user_signed_in?
      redirect_to user_omniauth_authorize_path(:coursera)
      return 
    end
    @user = current_user
    @user.email = params[:email] 
    @user.location = params[:location]
    @user.gender = params[:gender]
    year, month, day = params[:year].to_i, params[:month].to_i, params[:day].to_i
    unless Date.valid_date?(year, month, day)
      redirect_to action: "edit"
      flash[:error] = "Invalid Date."
      return
    end
    @user.birthday = Date.new(year, month, day)
    if @user.save
      redirect_to action: "display"
      flash[:notice] =  "Profile Updated"
    else
      redirect_to action: "edit" 
      flash[:error] = "There was a problem updating your profile"
    end
  end

  def consent
    unless user_signed_in?
      redirect_to user_omniauth_authorize_path(:coursera)
      return 
    end
    @user = current_user
  end

  def record_consent
    unless user_signed_in?
      redirect_to user_omniauth_authorize_path(:coursera)
      return 
    end

    @user = current_user
    @user.consent = true
    @user.consented_at = Time.now

    if @user.save
      redirect_to action: "display"
      flash[:notice] =  "You are now participating in the research study.  Thank you!"
    else
      redirect_to action: "consent" 
      flash[:error] = "There was a problem recording your consent."
    end
  end

end
