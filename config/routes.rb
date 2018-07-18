Rails.application.routes.draw do
  get 'vote/index'
  get 'report/index'
  get 'user/index'
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
