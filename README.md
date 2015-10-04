# How to use rails-assets.org (example bootstrap) to load bower (front-end) assets into your rails (backend) pipeline.

### Gemfile

	source 'https://rails-assets.org' do
	  gem 'rails-assets-bootstrap'
	end

###

	bundle install

### application.css

	*/ ...
	*= require_tree .
	*= require_self
	= require bootstrap 
	*/

### application.js

	// ...
	//= require jquery
	//= require jquery_ujs
	//= require turbolinks
	//= require bootstrap
	//= require_tree .

### create a quick scaffold to see bootstrap in action

	rails generate scaffold HighScore game:string score:integer
	rake db:migrate
	rails s
