class Vote < ApplicationRecord
  belongs_to :user
  belongs_to :report
  belongs_to :place
end
