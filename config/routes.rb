Rails.application.routes.draw do
  root to: "task_menu#index"
  
  namespace :api do
    jsonapi_resources :tasks
  end
  
  get "*path", to: "task_menu#index", constraints: { format: "html" }
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
