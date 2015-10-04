source 'https://rubygems.org'

# Bundle edge Rails instead: gem 'rails', github: 'rails/rails'
gem 'rails', '4.2.4'
# Use sqlite3 as the database for Active Record
gem 'sqlite3'
# Use SCSS for stylesheets
gem 'sass-rails', '~> 5.0'
# Use Uglifier as compressor for JavaScript assets
gem 'uglifier', '>= 1.3.0'
# Use CoffeeScript for .coffee assets and views
gem 'coffee-rails', '~> 4.1.0'
# See https://github.com/rails/execjs#readme for more supported runtimes
# gem 'therubyracer', platforms: :ruby

# Use jquery as the JavaScript library
gem 'jquery-rails'
# Turbolinks makes following links in your web application faster. Read more: https://github.com/rails/turbolinks
gem 'turbolinks'
# Build JSON APIs with ease. Read more: https://github.com/rails/jbuilder
gem 'jbuilder', '~> 2.0'
# bundle exec rake doc:rails generates the API under doc/api.
gem 'sdoc', '~> 0.4.0', group: :doc

# Use ActiveModel has_secure_password
# gem 'bcrypt', '~> 3.1.7'

# Use Unicorn as the app server
# gem 'unicorn'

# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development

# Add JavaScript libraries to Rails apps (from bower!)
# How this works: rails-assets grabs JavaScript packages from Bower, 
# analyzes their package.json, and serves them as honest-to-goodness gems. It’s magical.
# https://medium.com/@learnreact/react-on-rails-rails-assets-2acd287581db
# Why this is neat: rails-assets allows you to get your frontend assets directly from authors, 
# avoiding third-party wrapper gems, which can be poorly maintained.
# What does this have to do with React? Alt (a popular Flux implementation) is a React library on Bower. 
# react-router and react-dnd are also on Bower. There are hundreds of components and libraries 
# available on Bower. rails-assets.org, makes them instantly available to your Rails apps.
# rails-assets isn’t a module system: This is a solution for pragmatic Rails developers that want to stay 
# squarely on the golden path. rails-assets’ biggest benefit is that it works withinthe Rails Asset Pipeline.
source 'https://rails-assets.org' do
  gem 'rails-assets-bootstrap'
end

group :development, :test do
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug'
end

group :development do
  # Access an IRB console on exception pages or by using <%= console %> in views
  gem 'web-console', '~> 2.0'

  # Spring speeds up development by keeping your application running in the background. Read more: https://github.com/rails/spring
  gem 'spring'
end

