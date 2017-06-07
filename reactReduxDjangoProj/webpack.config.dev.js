var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var config = require('./webpack.config.base')

config.output.path = path.resolve('./assets/bundles')
config.output.filename = "[name].js"

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats.json'}),

])

config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
)

module.exports = config