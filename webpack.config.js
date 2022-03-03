const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  entry: './src/js/index.js',
  output: { path: __dirname + '/dist', filename: 'script.js', clean: true },
  plugins: [
    new HtmlWebpackPlugin({ filename: 'index.html', template: 'src/html/index.html' }),
    new HtmlWebpackPlugin({ filename: 'login/index.html', template: 'src/html/login/index.html' }),
    new HtmlWebpackPlugin({ filename: 'dashboard/index.html', template: 'src/html/dashboard/index.html' }),
    new MiniCssExtractPlugin({ filename: 'style.css' }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
      { test: /\.(gif|svg|png|jpe?g)$/, type: 'asset/resource' },
      { test: /\.html$/, use: ['html-loader'] },
    ]
  },
  output: { clean: true }
};