import path from 'path';
import webpack from 'webpack';
import BundleTracker from 'webpack-bundle-tracker';
import config from './webpack.config.base.bable';

config.output.path = path.resolve('./assets/dist')
config.output.filename = "[name]-[hash].js"

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats-prod.json'}),
  // removes a lot of debugging code in React
  new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
  }}),
  // keeps hashes consistent between compilations
  new webpack.optimize.OccurrenceOrderPlugin(),
  // minifies your code
  new webpack.optimize.UglifyJsPlugin({
    compressor: {
      warnings: false
    }
  })
])

// Add a loader for JSX files
config.module.loaders.push(
  { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' }
)

export default config;
