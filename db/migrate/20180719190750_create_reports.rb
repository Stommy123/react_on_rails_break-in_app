class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.string :description
      t.integer :lat
      t.integer :lng
      t.string :photo
      t.string :category

      t.timestamps
    end
  end
end
