class TaskMenuController < ApplicationController
  before_action :authenticate_user!

  def index
    current_user
  end

end
