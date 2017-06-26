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
  { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader?sourceMap'] },
  {test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']}
)

export default config;
