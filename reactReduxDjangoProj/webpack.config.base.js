var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')

module.exports = {
  context: __dirname,

  entry: './assets/js/index', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs

  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name].js"
  },

  plugins: [],

  module: {
    loaders: [],
  },

  resolve: {
    modules: ["node_modules"],
    extensions: ['.js', '.jsx']
  },
}