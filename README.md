# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

$ rails new blog
$ rake db:create
$ rake db:migrate

gem 'devise'

https://github.com/heartcombo/devise

bundle install

rails generate devise MODEL // rails generate devise User
rails db:migrate
rails generate devise:views

Step 1:
yarn add bootstrap@4.3.1 jquery popper.js moment

Step 2:
  in config/webpack/environment.js add the following:

    const { environment } = require('@rails/webpacker')

    const webpack = require('webpack')
    environment.plugins.append('Provide', new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      Popper: ['popper.js', 'default']
    }))

    module.exports = environment

Step 3:
in app/javascript/packs/application.js add the following:

require("jquery")
import 'popper.js'
import 'bootstrap'
import 'moment'