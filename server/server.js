const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express();
const restaurants = require('./routes/AllRestaurants.js')
import getRestaurants from './controllers/fastFoodNutrition/getAllRestaurants'

const redis = require('redis')
const client = redis.createClient(6377, '107.170.50.171')
var dirname = path.join(__dirname, '/../');


const env = 'development'

if(env === 'development') {
	const webpack = require('webpack')
	const webpackMiddleware = require('webpack-dev-middleware')
	const webpackConfig = require('../webpack.config')
	const webpackHotMiddleware = require('webpack-hot-middleware')
	const compiler = webpack(webpackConfig)

	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(bodyParser.json())

	client.auth('asdfjk123%')
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

	app.use('/restaurants', restaurants, function(req, res, next) {
		console.log('ressss', res)
		console.log('server ressssssss', res.restaurantMenu)

	})

	app.get('/', (req, res) => {
	res.sendFile(dirname+ '/Public/index.html')
	});

}

