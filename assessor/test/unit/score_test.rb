require 'test_helper'

class ScoreTest < ActiveSupport::TestCase
  test "Score for user and exericse is generated" do
    @user = FactoryGirl.create(:user)
    @exercise = FactoryGirl.create(:exercise)
    @score = FactoryGirl.build(:score)
    @score.user = @user
    @score.exercise = @exercise
    @score.save

    assert_equal(@user.scores.size, 1)
    assert_equal(@exercise.scores.size, 1)
  end




end
