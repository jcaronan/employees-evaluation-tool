var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
    }, {
      test: /\.partial\.html$/,
      loaders: ['html-loader'],
    }, {
      test: /\.css$/,
      loaders: ["style", "css"],
    }, {
      test: /\.scss$/,
      loaders: ["style", "sass"],
    },{
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loaders: ['file-loader'],
    },{
      test: /\.json$/,
      loaders: ['json-loader'],
    }]
  }
};
