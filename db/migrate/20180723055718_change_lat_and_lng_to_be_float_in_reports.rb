class ChangeLatAndLngToBeFloatInReports < ActiveRecord::Migration[5.2]
  def change
    change_column :reports, :lat, :float
    change_column :reports, :lng, :float
  end
end
