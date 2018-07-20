class MapController < ApplicationController
  before_action :authenticate_user!
  def googlemap
  end

  def mapbox
  end
end
