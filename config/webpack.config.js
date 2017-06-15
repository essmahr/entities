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
      }
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

var dev = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
          'sass-loader?sourceMap'
        ]
      }
    ]
  },
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

var production = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]',
            'sass-loader'
          ]
        }),
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
      allChunks: true,
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};

module.exports = merge(
  common,
  isProduction ? production : dev
);
