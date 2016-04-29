var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },
  output: {
    path: __dirname + '/build/',
    filename: 'bundle.js'
  }
};
