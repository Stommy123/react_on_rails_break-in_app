# frozen_string_literal: true

class SavedSpotsController < ApplicationController


  def index
    # @hello_world_props = { name: "Stranger" }
    puts "SavedSpotsController index called"
    @saved_spots_props = { name: "Stranger" }
  end
end
