const webpack = require('webpack');

module.exports = {
  entry: './src/app.js',
  output: {
    filename: './bundle.js'
  },
  target: 'web',
  module: {
    rules: [{
      test: /\.css$/,
      use: 'css-loader'
    },
    {
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader" // translates CSS into CommonJS
      }, {
        loader: "sass-loader" // compiles Sass to CSS
      }]
    },
    {
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015']
      }
    }]
  }
}