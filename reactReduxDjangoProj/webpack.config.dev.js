import path from 'path';
import webpack from 'webpack';
import BundleTracker from 'webpack-bundle-tracker';
import config from './webpack.config.base.js';

config.output.path = path.resolve('./assets/bundles')
config.output.filename = "[name].js"

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats.json'}),

])

config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
)

module.exports = config