require 'test_helper'

class TaskMenuControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get task_menu_index_url
    assert_response :success
  end

end
