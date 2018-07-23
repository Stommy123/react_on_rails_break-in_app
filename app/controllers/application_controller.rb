class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token, if: :json_request?

  layout :by_resource

  private

  def json_request?
   request.format.json?
 end

  def by_resource
    if devise_controller?
      "devise"
    else
      "application"
    end
  end
end
