Rails.application.routes.draw do

  root 'places#index'
  devise_for :users,
      controllers: {
        omniauth_callbacks: 'users/omniauth_callbacks'
      }
  resources :user, only: [:index]
  resources :home, only: [:index]
  resources :vote, only: [:index]
  resources :about, only: [:index]
  resources :places, only: [:create, :index, :show, :destroy]
  resources :scoreboard, only: [:index]
  resources :contact, only: [:index]
  get 'scoreboard/index'
  get 'saved_spots', to: 'saved_spots#index'
  get 'saved_spots_debug', to: 'saved_spots#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
