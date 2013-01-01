class HomeController < ApplicationController
  def index
    # display the splash background for the front page of the website
    @splash = true
  end

  def about
  end

  def people
    @people = Array.new

    @people << {
      :name => 'Bart Snapp',
      :photo => 'bart-snapp',
      :description => 'Bart is at OSU.',
      :link => 'http://www.math.osu.edu/~snapp/',
      :email => 'snapp@math.osu.edu'
    }

    @people << {
      :name => 'Jim Fowler', 
      :photo => 'jim-fowler',
      :description => 'Jim is at OSU.',
      :link => 'http://www.math.osu.edu/~fowler/',
      :email => 'fowler@math.osu.edu'
    }

    @people << {
      :name => 'Steven Gubkin', 
      :photo => 'steve-gubkin',
      :description => 'Steve is at OSU.',
      :email => 'gubkin@math.osu.edu',
      :link => 'http://www.math.osu.edu/people/gubkin.1/view',
    }

    @people << {
      :name => 'Ryan Kowalick', 
      :photo => 'ryan-kowalick',
      :description => 'Ryan Kowalick',
      :email => 'rkowalick@math.osu.edu',
      :link => 'http://www.math.osu.edu/people/kowalick.1'
    }

    @people << {
      :name => 'Roman Holowinsky', 
      :photo => 'roman-holowinsky',
      :description => 'Roman Holowinsky advises.',
      :email => 'romanh@math.osu.edu',
      :link => 'http://www.math.osu.edu/~romanh/'
    }

    @people << {
      :name => 'Sean Corey', 
#      :photo => 'sean-corey',
      :description => 'Sean Corey',
      :email => 'corey.osumath@gmail.com',
    }

    @people << {
      :name => 'Sean Collins', 
      :photo => 'sean-collins',
      :description => 'Originally from Cincinnati, Sean Collins is a senior at Ohio State majoring in  engineering physics; he\'s a big fan of chess and cards.  Sean is a teaching assistant for Calculus One.',
      :email => 'collins.999@osu.edu',
    }

    @people << {
      :name => 'Isaac Smith', 
#      :photo => 'isaac-smith',
      :description => 'Isaac is an undergraduate at Ohio State; he is a teaching assistant for Calculus One.',
      :email => 'smith.7914@osu.edu',
    }

    @people << {
      :name => 'Sean Collins',
#      :photo => 'sean-collins',
      :description => 'Sean is an undergraduate at Ohio State; he is a teaching assistant in this course.',
      :email => 'collins.999@osu.edu',
    }

    @people.shuffle!

  end
end
