var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    './src/scripts/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
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
  module: {
    loaders: [
      { test: /\.css/, loader: "style-loader!css-loader"},
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.jsx?$/, loader: 'babel', include: path.join(__dirname, 'src', 'scripts')},
      { test: /\.png/, loader: "url-loader?limit=100000&mimetype=image/png" },
      { test: /\.gif/, loader: "url-loader?limit=100000&mimetype=image/gif" },
      { test: /\.jpg/, loader: "file-loader" },
      { test: /\.json/, loader: "json-loader" },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
      {test: /\.html$/, loaders: ['html-loader'], include: path.join(__dirname, 'src', 'scripts')}
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
