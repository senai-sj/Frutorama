Rails.application.routes.draw do
  
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'pages#index'

  get 'fases', to: 'pages#fases'

  get 'tutorial', to: 'pages#tutorial'

  get 'creditos', to: 'pages#creditos'

  get 'lideres', to: 'pages#lideres'

  get 'licenca', to: 'pages#licenca'

  get 'contratempo', to: 'pages#contratempo'

  get 'n1', to: 'pages#n1'

  get 'n2', to: 'pages#n2'

  get 'n3', to: 'pages#n3'

  get 'n4', to: 'pages#n4'

  get 'n5', to: 'pages#n5'

  get 'n6', to: 'pages#n6'

  get 'n7', to: 'pages#n7'

  get 'n8', to: 'pages#n8'

  get 'n9', to: 'pages#n9'

  get 'n10', to: 'pages#n10'


  #get '/menu', to: 'pages#menu'
  
end
