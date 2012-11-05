require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  test "users should be accessible, have name and email" do
    user = users(:sample10)
    assert user.respond_to?(:email), "user does not have an email"
    assert user.name == "User10", "user does not have correct name"
    assert user.email == "user10@example.com", "user does not have correct email"
  end

  test "count" do
    assert_equal User.count, 30, "the size of users is wrong"
  end
end
