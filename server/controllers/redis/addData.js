// add hash for each restaurant to Redis Master d b
const redis = require('redis')
const client = redis.createClient(6377, '107.170.50.171')
client.auth('asdfjk123%')

const addHashData = (req, res, next) => {
	// console.log('addHashData', req.data)
		// let restName = req.menu.name
		// let menu = JSON.stringify(req.menu)
		// client.hset(restName, menu, menu, redis.print)
}

export default addHashData