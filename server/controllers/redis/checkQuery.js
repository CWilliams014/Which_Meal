import editRestaurantTitle from '../../../helpers/EditRestaurantTitle'

const redis = require('redis')
const client = redis.createClient(6377, '107.170.50.171')
client.auth('asdfjk123%')

const checkQueryExistence = (req, res, next) => {

	let restName = editRestaurantTitle(req.query.id)
	
	//check if restaurant name has been queried before. If so immediately send results, if not continue down middleware

	client.hkeys(restName, function(error, results) {
		console.log('hgetall restName', restName)
		// finding results but not returning the menu (ie chipotle)
		console.log('r', results)
		if(error || !results) {
			console.log('check query error', error)
			next()
		} 
		if(results && results.menu) {
			let parsedRestaurantResults = JSON.parse(results.menu)
			console.log('found in redis dbs')
			res.send(parsedRestaurantResults)
		} 
	})
}

export default checkQueryExistence 