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
    @user.osu_name_dot_number = params[:osu_name_dot_number].gsub( '@osu.edu', '' )
    @user.name = params[:name] 

    if not @user.osu_name_dot_number.match( /^[A-z0-9]+\.[0-9]+$/ )
      redirect_to action: "consent"
      flash[:error] =  "<strong>Error:</strong> Please make sure to enter your OSU lastname.number."
    else
      if @user.save
        ConsentMailer.informed_consent(@user).deliver
        
        redirect_to action: "display"
        flash[:notice] =  "Please be sure to respond to the email in order to finish joining the research study."
      else
        redirect_to action: "consent" 
        flash[:error] = "There was a problem recording your consent."
      end
    end
  end

  def confirm_consent
    @user = User.find( Tokenifier.decrypt(params[:token]).to_i )

    @user.consented_at = Time.now

    if @user.save    
      flash[:notice] =  "You have successfully joined the research study."
    else
      flash[:error] =  "There was an error; can you try clicking on the link again?"
    end
  end

end
