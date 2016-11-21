'use strict';

let path = require('path');
let webpack = require('webpack');

let baseConfig = require('./base');
let defaultSettings = require('./defaults');

/**
 * Project configuration: A JSON file that contains all the meta data used
 * to generate the index.html. Needs to be adapted for every project.
 */
let projectConfig = require('../src/config.json');

// Add needed plugins here
let BowerWebpackPlugin = require('bower-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');

let config = Object.assign({}, baseConfig, {
  entry: path.join(__dirname, '../src/index'),
  cache: false,
  devtool: 'source-map',
  debug: false,
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.[hash].js',
    publicPath: defaultSettings.publicPath
  },
  externals: [
    {
      'window': 'window'
    }
  ],
  plugins: [
    new HtmlWebpackPlugin(Object.assign({}, projectConfig, {
      template: 'src/index.ejs',
      filename: '../index.html',
    })),
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new BowerWebpackPlugin({
      searchResolveModulesDirectories: false
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ],
  module: defaultSettings.getDefaultModules()
});

// Add needed loaders to the defaults here
config.module.loaders.push({
  test: /\.(js|jsx)$/,
  loader: 'babel',
  include: [].concat(
    config.additionalPaths,
    [ path.join(__dirname, '/../src') ]
  )
});

// Add alias to react lite
config.resolve.alias = Object.assign({}, config.resolve.alias, {
  'react': 'react-lite',
  'react-dom': 'react-lite'
});



module.exports = config;
