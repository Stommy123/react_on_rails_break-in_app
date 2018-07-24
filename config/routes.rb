Rails.application.routes.draw do

  get 'scoreboard/index'
  get 'support/index'
  get 'locations/index'
  root 'home#index'
  devise_for :users,
      controllers: {
        omniauth_callbacks: 'users/omniauth_callbacks'
      }
  resources :report, only: [:create, :index, :destroy]
  get 'map/mapbox'
  get 'contact/index'
  get 'report/index'
  resources :home, only: [:index]
  resources :vote, only: [:index]
  get 'saved_spots', to: 'saved_spots#index'
  get 'hello_world', to: 'hello_world#index'
  get 'saved_spots_debug', to: 'saved_spots#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
