import webpack from 'webpack';
import BundleTracker from 'webpack-bundle-tracker';
import config from'./webpack.config.base.babel';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('devhot')
};

config.devtool = 'inline-source-map',

// Use webpack dev server
config.entry = [
  'webpack-dev-server/client?http://localhost:3000',
  'webpack/hot/only-dev-server',
  './assets/src/index'
]

// override django's STATIC_URL for webpack bundles
config.output.publicPath = 'http://localhost:3000/assets/bundles/'  // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name

// Add HotModuleReplacementPlugin and BundleTracker plugins
config.plugins = config.plugins.concat([
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
  new BundleTracker({filename: './webpack-stats.json'}),
])

// Add a loader for JSX files with react-hot enabled
config.module.loaders.push(
  {test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader?sourceMap']},
  {test: /(\.css|\.scss|\.sass)$/, loaders: ['style-loader', 'css-loader?sourceMap', 'sass-loader?sourceMap']},
  {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader'},
  {test: /\.(woff|woff2)$/, loader: 'url-loader?prefix=font/&limit=5000'},
  {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=application/octet-stream'},
  {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url-loader?limit=10000&mimetype=image/svg+xml'}
)

export default config;
