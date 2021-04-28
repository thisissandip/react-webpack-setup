const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		filename: 'build.js',
		path: path.join(__dirname, '/dist'),
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node-modules/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new HTMLWebpackPlugin({
			template: path.join(__dirname, '/src/index.html'),
		}),
	],
};
