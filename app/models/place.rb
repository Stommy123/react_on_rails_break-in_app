class Place < ApplicationRecord
  #Sets method of geo locating based on available params / ip address
  geocoded_by :geocode_method
  after_validation :geocode, if: :needs_geocode?
  #Sets the relationships Place has with other models
  belongs_to :user
  #Allow for each Place report to have an image attached
  has_one_attached :image

  #Combines certain attribrutes of place into an address
  def address
    [street, city, state, country].compact.reject(&:empty?).join(', ')
  end

  private

  #If address is not present then geocode by ip
  def geocode_method
    if address.present?
      address
    else
      ip
    end
  end

  #If geocoding is needed then use either address / ip 
  def needs_geocode?
    if address.present?
      true
    else
      latitude.nil? && longitude.nil?
    end
  end

end
