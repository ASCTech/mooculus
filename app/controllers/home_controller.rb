class HomeController < ApplicationController
  def index
    # display the splash background for the front page of the website
    @splash = true
  end

  def about
  end

  def developers
    @developers = Developer.all.to_a
    @developers.shuffle!
  end

  def contact
  end

end
