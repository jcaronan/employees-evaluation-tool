var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/scripts/index'
  ],
  output: {
    path: path.join(__dirname,'src' ,'dist'),
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
      include: path.join(__dirname, 'src', 'scripts')
    }, {
      test: /\.html$/,
      loaders: ['html-loader'],
      include: path.join(__dirname, 'src', 'scripts')
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
