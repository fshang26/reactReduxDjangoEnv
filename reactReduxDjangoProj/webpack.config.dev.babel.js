import path from 'path';
import BundleTracker from 'webpack-bundle-tracker';
import config from'./webpack.config.base.babel';

config.devtool = 'inline-source-map',

  config.output.path = path.resolve('./assets/bundles')
config.output.filename = "[name].js"

config.plugins = config.plugins.concat([
  new BundleTracker({filename: './webpack-stats.json'}),

])

config.module.loaders.push(
  {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader?sourceMap']},
  {test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']},
  {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
  {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
  {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
  {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
)

export default config;
