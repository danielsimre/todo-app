Rails.application.routes.draw do
  
  root to: "task_menu#index"
  resources :task_menu

  namespace :api do 
    namespace :v1 do
      jsonapi_resources :users do
        jsonapi_related_resources :tasks do
          jsonapi_related_resources :tags
        end
      end
      jsonapi_resources :tasks
      jsonapi_resources :tags
      jsonapi_resources :tag_tasks
    end
  end
  
  devise_for :users

  get "*path", to: "task_menu#index", constraints: { format: "html" }
  

  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
