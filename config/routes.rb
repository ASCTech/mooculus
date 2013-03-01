Assessor::Application.routes.draw do
  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'home#index'

  get "home/index"
  get "developers" => "home#developers"
  get "about" => "home#about"
  get "contact" => "home#contact"

  get "score/index"

  get "course" => "course#index"

  get "profile/display" => "profile#display"
  get "profile/edit" => "profile#edit"
  post "profile/edit" => "profile#update"
  get "profile/consent" => "profile#consent"
  post "profile/record_consent" => "profile#record_consent"
  # place all special exercise routes about resources :exercises
  get "exercises/progress" => "exercises#progress"
  resources :exercises
  resources :handouts
  resources :videos

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # After user authenticates with provider, user needs to go to omniauth call
  # match '/auth/:provider/callback' => 'authentications#create'

  devise_for :users, :controllers => { :omniauth_callbacks => "users/omniauth_callbacks" }

  match '/api/v1/user/exercises/:exercise/problems/:problem/attempt' => 'score#attempt',
    :constraints => { :problem => /\d+/ }, :via => :post

  match '/api/v1/user/exercises/:exercise/problems/:problem/hint' => 'score#hint',
    :constraints => { :problem => /\d+/ }, :via => :post

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'

  # explorations
  get "explorations" => "explorations#index"
  get "explorations/derivative" => "explorations#derivative"
  get "explorations/graph" => "explorations#graph"
  get "explorations/trigExplore" => "explorations#trigExplore"
  get "explorations/doppler" => "explorations#doppler"
  get "explorations/trains" => "explorations#trains"
  get "explorations/fifths" => "explorations#fifths"
end
