Rails.application.routes.draw do

  get 'support/index'
  get 'locations/index'
  root 'home#index'
  devise_for :users
  resources :report, only: [:create, :index, :destroy]
  get 'map/mapbox'
  get 'contact/index'
  get 'report/index'
  resources :home, only: [:index]
  resources :vote, only: [:index]
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
