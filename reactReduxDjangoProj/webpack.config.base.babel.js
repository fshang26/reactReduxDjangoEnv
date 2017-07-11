import path from 'path';

export default {
  context: __dirname,
  entry: './assets/src/index', // entry point of our app. assets/src/index.js should require other js modules and dependencies it needs
  target: 'web',
  output: {
      path: path.resolve('./assets/bundles/'),
      filename: "[name].js"
  },
  plugins: [
  ],
  module: {
    loaders: [
    ],
  },
  resolve: {
    modules: ["node_modules"],
    extensions: ['.js', '.jsx']
  }
};
