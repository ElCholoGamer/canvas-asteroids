import { Configuration, DefinePlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import CssMinimizerWebpackPlugin from 'css-minimizer-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { resolve } from 'path';

const BUILD = resolve(__dirname, 'build');
const MODE = (process.env.NODE_ENV || 'development') as Configuration['mode'];

const config: Configuration = {
	mode: MODE,
	entry: resolve(__dirname, 'src/index.ts'),
	target: 'es5',
	devtool: 'source-map',
	output: {
		path: BUILD,
		filename: 'js/[name].[contenthash:8].js',
		chunkFilename: 'js/[name].[contenthash:8].chunk.js',
		publicPath: '/',
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
		],
	},
	plugins: [
		new DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(MODE),
		}),
		new HtmlWebpackPlugin({ template: 'public/index.html', minify: true }),
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash:8].css',
			chunkFilename: 'css/[name].[contenthash:8].chunk.css',
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
					minimizer: [new CssMinimizerWebpackPlugin()],
					splitChunks: {
						chunks: 'all',
					},
			  },
	devServer: {
		port: 3000,
		hot: true,
		contentBase: BUILD,
		publicPath: '/',
	},
};

export default config;
