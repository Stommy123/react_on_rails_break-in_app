class Place < ApplicationRecord
  geocoded_by :geocode_method   #Sets method of geo locating based on available params / ip address
  after_validation :geocode, if: :needs_geocode?
  belongs_to :user   #Sets the relationships Place has with User
  has_one_attached :image   #Allow for each Place report to have an image attached

  def address
    [street, city, state, country].compact.reject(&:empty?).join(', ')   #Combines certain attribrutes of place into an address
  end

  private
  def geocode_method   #If address is not present then geocode by ip
    address.present? ? address : ip
  end

  def needs_geocode?   #If geocoding is needed then use either address / ip 
    address.present? ? true : latitude.nil? && longitude.nil?
  end
end
