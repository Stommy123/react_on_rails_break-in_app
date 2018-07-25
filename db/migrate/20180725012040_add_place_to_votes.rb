class AddPlaceToVotes < ActiveRecord::Migration[5.2]
  def change
    add_reference :votes, :place, foreign_key: true
  end
end
