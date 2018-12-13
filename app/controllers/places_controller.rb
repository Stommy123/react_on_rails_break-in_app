class PlacesController < ApplicationController
  before_action :authenticate_user!   #User must be logged in to view
  before_action :set_place, only: [:show, :destroy]   #Find Place for only show / destroy action


  def create
    @place = current_user.places.new(place_params.merge(ip: request.ip)) #Creates a new Place report for current user that is signed in
    @place.save
    render json: @place
  end

  def index
    respond_to do |format|     #If format is html, then render all Places and their coordinates
      format.html do
        @place = Place.new
        @coordinates  = request.location
                          .coordinates
                          .reverse
      end
      format.json do       #If format is json, render all nearby places as markers
        if params[:filter] == "mine"
          @places = current_user.places.where.not(name: nil)
          render json: @places
        else
          @places = Place.all
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
                                name:           place.name,
                                category:       place.category,
                                description:    place.description,
                                street:         place.street,
                                city:           place.city,
                                state:          place.state,
                                image:          place.image,
                                id:             place.id
                              }
                            }
                          end
                        }
        end
      end
    end
  end

  def show
  end



  def destroy     #destroys the current user's place report then redirect back to map page
    @place = current_user.places.find(params[:id])
    @place.destroy
    redirect_to places_path
  end

  private

  def place_params     #define parameters for what is an acceptable Place report
    params.require(:place)
          .permit(
            :name, 
            :description, 
            :category, 
            :street, 
            :city, 
            :state, 
            :country, 
            :latitude, 
            :longitude, 
            :image
          )
  end

  def set_place
    @place = Place.find(params[:id])  #finds each individual place by its ID
  end

end
