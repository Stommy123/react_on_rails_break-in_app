class AddReportToVotes < ActiveRecord::Migration[5.2]
  def change
    add_reference :votes, :report, foreign_key: true
  end
end
