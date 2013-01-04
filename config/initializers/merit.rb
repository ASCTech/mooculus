# Use this hook to configure merit parameters
Merit.setup do |config|
  # Check rules on each request or in background
  # config.checks_on_each_request = true

  # Define ORM. Could be :active_record (default) and :mongo_mapper and :mongoid
  # config.orm = :active_record

  # Define :user_model_name. This model will be used to grand badge if no :to option is given. Default is "User".
  # config.user_model_name = "User"

  # Define :current_user_method. Similar to previous option. It will be used to retrieve :user_model_name object if no :to option is given. Default is "current_#{user_model_name.downcase}".
  # config.current_user_method = "current_user"
end

# Create application badges (uses https://github.com/norman/ambry)
Badge.create!({
   :id => 1,
   :name => 'Hourglass',
   :description => 'Spent one hour doing exercises'
})

Badge.create!({
   :id => 2,
   :name => 'Dayfly',
   :description => 'Spent one day doing exercises'
})

Badge.create!({
   :id => 3,
   :name => 'Perfect Ten',
   :description => 'Answered ten exercises correctly'
})

Badge.create!({
   :id => 4,
   :name => 'Hundreder',
   :description => 'Answered 100 exercises correctly'
})

Badge.create!({
   :id => 5,
   :name => 'Grand Slam',
   :description => 'Answered 1000 exercises correctly'
})

Badge.create!({
   :id => 6,
   :name => 'Myriad',
   :description => 'Answered 10000 exercises correctly'
})

Badge.create!({
   :id => 7,
   :name => 'Hole in One',
   :description => 'Answered an exercise correctly without using a hint'
})

Badge.create!({
   :id => 8,
   :name => 'Four Aces',
   :description => 'Answered four exercises correctly without using a hint'
})

Badge.create!({
   :id => 9,
   :name => 'C Note',
   :description => 'Answered 100 exercises correctly without using a hint'
})

Badge.create!({
   :id => 10,
   :name => 'Secret Agent',
   :description => 'Examined one thousand hints'
})

Badge.create!({
   :id => 11,
   :name => 'Setec Astronomer',
   :description => 'Examined ten thousand hints'
})
