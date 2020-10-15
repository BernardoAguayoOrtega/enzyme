//import html webpack plugin
const HtmlWebPackPlugin = require('html-webpack-plugin');

//css rules
cssRules = {
	test: /\.css$/i,
	use: ['style-loader', 'css-loader'],
};

//babel rules
babelRules = {
	test: /\.js$/,
	exclude: /node_modules/,
	loader: 'babel-loader',
};

//ise webpack config and export it
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.[contentHash].js',
	},
	plugins: [
		new HtmlWebPackPlugin({
			title: 'enzyme practice',
			template: './public/index.html',
		}),
	],
	devServer: {
		port: 3000,
	},
};
