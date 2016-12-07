// add hash for each restaurant to Redis Master d b
const redis = require('redis')
const client = redis.createClient(6377, '107.170.50.171')
client.auth('asdfjk123%')

const addHashData = (req, res, next) => {
		let restInfo = req.data
		let restaurantName = restInfo.shift()
		let stringRestInfo = JSON.stringify(restInfo)

		client.hmset("restaurants", {"restaurantName" : restaurantName, "menu" : stringRestInfo}, redis.print)
}

export default addHashData