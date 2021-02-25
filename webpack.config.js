const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const { resolve } = require('path');
const pkg = require('./package.json');

const BUILD = resolve(__dirname, 'build');
const MODE = process.env.NODE_ENV || 'development';

const publicPath = MODE === 'development' ? '/' : `/${pkg.name}`;

/** @type {import('webpack').Configuration} */
const config = {
	mode: MODE,
	entry: resolve(__dirname, 'src/index.ts'),
	target: ['web', 'es5'],
	devtool: 'source-map',
	output: {
		path: BUILD,
		filename: '[name].[contenthash:8].js',
		chunkFilename: '[name].[contenthash:8].chunk.js',

		publicPath,
	},
	resolve: {
		extensions: ['.ts', '.js'],
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)$/i,
				exclude: /node_modules/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							cacheDirectory: true,
							presets: ['@babel/env', '@babel/typescript'],
							plugins: [['@babel/transform-runtime', { regenerator: true }]],
						},
					},
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
			},
			{
				test: /\.css$/i,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /assets(\\|\/)/i,
				loader: 'file-loader',
				options: {
					name: 'assets/[folder]/[name].[ext]',
					publicPath,
				},
			},
		],
	},
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(MODE),
		}),
		new HtmlWebpackPlugin({ template: 'public/index.html', minify: true }),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].[contenthash:8].css',
			chunkFilename: '[name].[contenthash:8].chunk.css',
		}),
		new CssMinimizerWebpackPlugin(),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: 'public/',
					globOptions: {
						ignore: '**/*.html',
					},
				},
			],
		}),
		new ForkTsCheckerWebpackPlugin(),
	],
	optimization:
		MODE === 'development'
			? {}
			: {
					minimize: true,
					minimizer: [
						new CssMinimizerWebpackPlugin(),
						new TerserWebpackPlugin(),
					],
			  },
	devServer: {
		port: 3000,
		hot: true,
		contentBase: BUILD,
		publicPath: '/',
	},
};

module.exports = config;
