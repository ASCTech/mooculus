require 'test_helper'

class HandoutsControllerTest < ActionController::TestCase
  setup do
    @handout = handouts(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:handouts)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create handout" do
    assert_difference('Handout.count') do
      post :create, handout: { order: @handout.order, title: @handout.title, url: @handout.url, week: @handout.week }
    end

    assert_redirected_to handout_path(assigns(:handout))
  end

  test "should show handout" do
    get :show, id: @handout
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @handout
    assert_response :success
  end

  test "should update handout" do
    put :update, id: @handout, handout: { order: @handout.order, title: @handout.title, url: @handout.url, week: @handout.week }
    assert_redirected_to handout_path(assigns(:handout))
  end

  test "should destroy handout" do
    assert_difference('Handout.count', -1) do
      delete :destroy, id: @handout
    end

    assert_redirected_to handouts_path
  end
end
