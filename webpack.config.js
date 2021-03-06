//Public path tells webpack where the bundle will be serverd up on the web server
//easy to swap out sass and less
//url-loader?limit=20000
	//will look at each image, if its under 20kb, it will be inline and turned into base64 encoded data. Bigger ones will be separate request
// add fonts to test that loads images

const path = require('path')
const env = require('./.env');
const webpack = require('webpack')

module.exports = {
	devtools: 'cheap-module-eval-source-map',
	context: path.resolve('client'),
	entry: [
		'webpack-hot-middleware/client',
		path.join(__dirname, '/client/index.js')
	],
	output: {
		path: '/',
		publicPath: '/',
	},

	plugins: [
		new webpack.NoErrorsPlugin(),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin()
	],

	eslint: {
		configFile: './.eslintrc'
	},

	module: {
		preLoaders: [
      { test: /\.json$/, 
      	loader: 'json'
      },
    ],
		loaders: [
			{
				test:/\.js$/,
				include: [
					path.join(__dirname, 'client'),
					path.join(__dirname, 'server'),
					path.join(__dirname, 'test')
				],
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			},
			{
				test: /\.css$/,
				include: path.join(__dirname, 'Public'),
				loaders: ['style', 'css']
			},
			{
				test:/\.scss$/,
				include: path.join(__dirname, 'Public'),
				exclude:/node_modules/,
				loaders:['style', 'css', 'sass']
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
				loader: 'url-loader?limit=10000',
				include:[path.join(__dirname, 'Public')]
			}
		]
	},

	externals: {
		'cheerio': 'window',
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
	},

	resolve: {
		extentions: ['', '.js']
	}
}