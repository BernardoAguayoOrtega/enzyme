//import webpack plugins
const HtmlWebPackPlugin = require('html-webpack-plugin');

const cssRules = {
  test: /\.css$/i,
  use: ['style-loader', 'css-loader'],
};

const babelRules = {
  test: /\.(js)$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
};

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.[contentHash].js',
  },
  module: {
    rules: [babelRules, cssRules],
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'marketing site',
      template: './public/index.html',
    }),
  ],
  devServer: {
    port: 3000,
  },
};
