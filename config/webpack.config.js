var webpack = require('webpack');
var path = require('path');
var merge = require('webpack-merge');
var autoprefixer = require('autoprefixer');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var config = require('./public/app/config/env.js');

var isProduction = process.env.NODE_ENV === 'production';

var common = {
  entry: path.resolve(__dirname, '../src/app/index.js'),
  devtool: 'source-map',
  output: {
    path: __dirname + '/build',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          query: {
            cacheDirectory: true,
            plugins: ['transform-runtime'],
            presets: ['es2015', 'react', 'stage-0'],
          },
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      isProduction: isProduction,
      analyticsKey: '',
      template: 'src/index.ejs',
      inject: 'body',
      hash: true,
    }),
  ]
}

var production = {};

var dev = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    port: 8080
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ]
};

module.exports = merge(
  common,
  isProduction ? production : dev
);
