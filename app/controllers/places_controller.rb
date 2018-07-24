class PlacesController < ApplicationController
  before_action :set_place, only: [:show, :destroy]

  def create
    Place.create(place_params.merge(ip: request.ip))
  end

  def index
    respond_to do |format|
      format.html do
        @place = Place.new
        @coordinates  = Geocoder.search(request.ip)
                          .first
                          .coordinates
                          .reverse
      end
      format.json do
        @places = Place.near([params[:lat], params[:lng]], 50)
        render json:  {
                        type: "FeatureCollection",
                        features: @places.map do |place|
                          {
                            type: "Feature",
                            geometry: {
                              type: "Point",
                              coordinates: [place.longitude, place.latitude]
                            },
                            properties: {
                              name: place.name,
                              id: place.id
                            }
                          }
                        end
                      }
      end
    end
  end

  def show
  end

  def destroy
    @place.destroy
    redirect_to places_path
  end

  private

  def place_params
    params.require(:place).permit(:name, :street, :city, :state, :country, :latitude, :longitude)
  end

  def set_place
    @place = Place.find(params[:id])
  end

end
