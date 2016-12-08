const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const restaurants = require('./routes/getRestaurant.js')
import getRestaurants from './controllers/fastFoodNutrition/getAllRestaurants'
import loadAll from './controllers/redis/getAllRestaurants'
const {redis, client} = require('.././helpers/redis/redis.Config')
const dirname = path.join(__dirname, '/../');

const env = 'development'

if (env === 'development') {
	const webpack = require('webpack')
	const webpackMiddleware = require('webpack-dev-middleware')
	const webpackConfig = require('../webpack.config')
	const webpackHotMiddleware = require('webpack-hot-middleware')
	const compiler = webpack(webpackConfig)

	app.use(bodyParser.urlencoded({
		extended: true
	}));
	app.use(bodyParser.json())


	client.on('connect', function() {
		console.log('redis connected')
	})

	app.use(webpackMiddleware(compiler, {
		hot: true,
		publicPath: webpackConfig.output.publicPath,
		noInfo: true
	}))

	app.use(webpackHotMiddleware(compiler));

	app.listen(3000, () => {
		console.log('listening on port 3000')
	})

	app.use('/restaurants', restaurants)
	app.use('/loadAll', loadAll, function(req, res) {
		console.log('ressssssssssss', res.menu)
		res.send(res.menu)
	})


	app.get('/', (req, res) => {
		res.sendFile(dirname + '/Public/index.html')
	});

}