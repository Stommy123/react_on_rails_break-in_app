class ApplicationRecord < ActiveRecord::Base
  #Whatever is put here will apply to all models 
  self.abstract_class = true
end
