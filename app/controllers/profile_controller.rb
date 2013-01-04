class ProfileController < ApplicationController
  def display
    unless user_signed_in?
      redirect_to user_omniauth_authorize_path(:coursera)
      return 
    end
    @user = current_user
  end
  


end
