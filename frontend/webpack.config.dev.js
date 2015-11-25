var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: '/',
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  node: {  // this is for pixi.js
    fs: "empty"
  },
  resolve: {
    modulesDirectories: ['web_modules', 'bower_components', 'node_modules']
  },
  module: {
    loaders: [
      { test: /\.css/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel'},
      { test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.gif/, loader: "url-loader?limit=100000&mimetype=image/gif" },
      { test: /\.jpg/, loader: "file-loader" },
      { test: /\.json/, loader: "json-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {test: /\.partial\.html$/, loaders: ['html-loader'],}
    ]
  }
  //module: {
  //  loaders: [{
  //    test: /\.js$/,
  //    loaders: ['babel'],
  //  }, {
  //    test: /\.partial\.html$/,
  //    loaders: ['html-loader'],
  //  }, {
  //    test: /\.css$/,
  //    loaders: ["style", "css"],
  //  }, {
  //    test: /\.scss$/,
  //    loaders: ["style", "sass"],
  //  },{
  //    test: /\.(png|woff|woff2|eot|ttf|svg)$/,
  //    loaders: ['file-loader'],
  //  },{
  //    test: /\.json$/,
  //    loaders: ['json-loader'],
  //  }]
  //},
  //node: {
  //  fs: "empty"
  //}
};
