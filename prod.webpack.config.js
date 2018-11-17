var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'inline-sourcemap',
  entry: [
  	path.resolve('src/components/Index.jsx'),
  ],
  output: {
    path: path.resolve('build'),
    filename: 'app.js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.jsx$|\.js$/,
        loader: 'eslint-loader',
        exclude: /bundle\.js$/
      },
      {
        test: /\.jsx$|\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'env']
        }
      },
  	  {
    		test: /\.css$/,
    		loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
  	  }
    ]
  },
  plugins: [
    new ExtractTextPlugin({ filename: '[name].css', disable: false, allChunks: false }),
    new webpack.optimize.UglifyJsPlugin({minimize: true})
  ]
};
