class UserController < ApplicationController
  before_action :authenticate_user!
  def index
    respond_to do |format|
      format.html
      format.json do
        @users = User.all.by_points
        render json: @users
      end
    end
  end
end
