Rails.application.routes.draw do

  # navigate to styleguide
  get 'docs', :to => redirect('styleguide/bases.html')

  # navigate to homepage
  root "pages#landing"

  get 'result' => 'flightsearch#results'

end
