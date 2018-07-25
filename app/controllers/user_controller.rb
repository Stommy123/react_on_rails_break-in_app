class UserController < ApplicationController
  #Require user be signed in
  before_action :authenticate_user!
  def index
    #Renders all users then sort by  how many points they have
    respond_to do |format|
      format.html
      format.json do
        @users = User.all.by_points
        render json: @users
      end
    end
  end
end
