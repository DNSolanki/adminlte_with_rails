Rails.application.routes.draw do
    # Back admin routes start
  namespace :admin do
    resources :users do
      post :status_update, on: :collection
    end

    # Admin root
    root to: 'application#index'
    # post 'users/status_update' => 'users#status_update'
  end

    # Front routes start
  devise_for :users, only: [:session, :registration], path: 'session',
             path_names: { sign_in: 'login', sign_out: 'logout', sign_up: 'register' }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # Application root
  root to: 'application#home'
  # Front routes end
  
end
