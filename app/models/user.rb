class User < ApplicationRecord
  has_many :votes   #Relationships the user has with votes
  has_many :places #Relationships the user has with places
  scope :by_points, -> { order(points: :desc) }   #Sorts users by points
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  devise :omniauthable, omniauth_providers: [:facebook]

  def self.from_omniauth(auth)   #Facebook login
    where(email: auth.info.email).first_or_create! do |user|
      user.provider = auth.provider
      user.uid      = auth.uid
      user.password = Devise.friendly_token[0,20] unless user.password.present?
    end
  end
end
