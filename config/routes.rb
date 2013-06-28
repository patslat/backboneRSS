NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create, :destroy] do
    resources :entries, only: [:index]
  end
  get "/feeds/:id/reload" => 'feeds#reload'
  root to: "feeds#index"
end
