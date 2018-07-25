class ApplicationController < ActionController::Base
  #Whatever is put here will apply to all controllers
  #Verify geocoder api for axios request
  skip_before_action :verify_authenticity_token, if: :json_request?

  #Renders layout depending on resourceful routes
  layout :by_resource

  private
  #Formats json file in view
  def json_request?
   request.format.json?
 end

 #Validates controller for devise requirements
  def by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end
end
