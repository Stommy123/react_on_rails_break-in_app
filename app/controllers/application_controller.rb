class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token, if: :json_request?   #Verify geocoder api for axios request
  layout :by_resource   #Renders layout depending on resourceful routes

  private
  def json_request?   #Formats json file in view
   request.format.json?
  end

  def by_resource  #Validates controller for devise requirements
    devise_controller? ? "devise" : "application"
  end
end
