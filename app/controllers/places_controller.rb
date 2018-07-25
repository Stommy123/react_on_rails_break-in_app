class PlacesController < ApplicationController
  #User must be logged in to view
  before_action :authenticate_user!
  #Find Place for only show / destroy action
  before_action :set_place, only: [:show, :destroy]


  def create
    #Creates a new Place report for current user that is signed in
    #use ip address if params are not met, for all else render a 400 error
    @place = current_user.places.new(place_params.merge(ip: request.ip))
    if @place.save
      render json: @place
    else
      render json: @place.errors.full_messages, status: 400
    end
  end

  def index
    #If format is html, then render all Places and their coordinates
    respond_to do |format|
      format.html do
        @place = Place.new
        @coordinates  = Geocoder.search(request.ip)
                          .first
                          .coordinates
                          .reverse
      end
      #If format is json, render all nearby places as markers
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
    #destroys the current user's place report then redirect back to map page
    @place = current_user.places.find(params[:id])
    @place.destroy
    redirect_to places_path
  end

  private

  def place_params
    #define parameters for what is an acceptable Place report
    params.require(:place).permit(:name, :street, :city, :state, :country, :latitude, :longitude, :image)
  end

  def set_place
    #finds each individual place by its ID
    @place = Place.find(params[:id])
  end

end
