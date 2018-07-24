class AddColumnsToPlaces < ActiveRecord::Migration[5.2]
  def change
    add_column :places, :description, :string
    add_column :places, :category, :string
    add_column :places, :photo, :string
  end
end
