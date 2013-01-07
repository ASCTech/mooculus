# Be sure to restart your server when you modify this file.
#
# +grant_on+ accepts:
# * Nothing (always grants)
# * A block which evaluates to boolean (recieves the object as parameter)
# * A block with a hash composed of methods to run on the target object with
#   expected values (+:votes => 5+ for instance).
#
# +grant_on+ can have a +:to+ method name, which called over the target object
# should retrieve the object to badge (could be +:user+, +:self+, +:follower+,
# etc). If it's not defined merit will apply the badge to the user who
# triggered the action (:action_user by default). If it's :itself, it badges
# the created object (new user for instance).
#
# The :temporary option indicates that if the condition doesn't hold but the
# badge is granted, then it's removed. It's false by default (badges are kept
# forever).

module Merit
  class BadgeRules
    include Merit::BadgeRulesMethods

    # Guru levels using quickly growing functions

    def initialize
      grant_on ['score#attempt'], :badge => 'Hourglass', :to => :user do |score|
        score.user.total_thinking_time >= 3600
      end

      grant_on ['score#attempt'], :badge => 'Dayfly', :to => :user do |score|
        score.user.total_thinking_time >= 86400
      end

      grant_on ['score#attempt'], :badge => 'Perfect Ten', :to => :user do |score|
        score.user.total_correct_answers >= 10
      end

      grant_on ['score#attempt'], :badge => 'Hundreder', :to => :user do |score|
        score.user.total_correct_answers >= 100
      end

      grant_on ['score#attempt'], :badge => 'Grand Slam', :to => :user do |score|
        score.user.total_correct_answers >= 1000
      end

      grant_on ['score#attempt'], :badge => 'Myriad', :to => :user do |score|
        score.user.total_correct_answers >= 10000
      end

      grant_on ['score#attempt'], :badge => 'Hole in One', :to => :user do |score|
        score.user.total_correct_answers_without_hints >= 1
      end

      grant_on ['score#attempt'], :badge => 'Four Aces', :to => :user do |score|
        score.user.total_correct_answers_without_hints >= 4
      end

      grant_on ['score#attempt'], :badge => 'C Note', :to => :user do |score|
        score.user.total_correct_answers_without_hints >= 100
      end

      grant_on ['score#hint'], :badge => 'Secret Agent', :to => :user do |score|
        score.user.total_hints_requested >= 1000
      end

      grant_on ['score#hint'], :badge => 'Setec Astronomer', :to => :user do |score|
        score.user.total_hints_requested >= 10000
      end

      #grant_on ['users#create', 'users#update'], :badge => 'autobiographer', :temporary => true do |user|
      #  user.name.present?
      #end

      # If it creates user, grant badge
      # Should be "current_user" after registration for badge to be granted.
      # grant_on 'users#create', :badge => 'just-registered', :to => :itself

      # If it has 10 comments, grant commenter-10 badge
      # grant_on 'comments#create', :badge => 'commenter', :level => 10 do |comment|
      #   comment.user.comments.count == 10
      # end

      # Changes his name by one wider than 4 chars (arbitrary ruby code case)
      # grant_on 'registrations#update', :badge => 'autobiographer', :temporary => true, :model_name => 'User' do |user|
      #   user.name.length > 4
      # end
    end
  end
end
