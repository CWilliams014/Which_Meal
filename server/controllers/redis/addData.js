// add hash for each restaurant to Redis Master d b
const redis = require('redis')
const client = redis.createClient(6377, '107.170.50.171')
client.auth('asdfjk123%')

const addHashData = (req, res, next) => {
	for(var i = 0; i < req.menu.length; i++) {
		let itemName = req.menu[i]['menu item']
		let dailyPercentage = JSON.stringify(req.menu[i].dailyPercentage)
		let amtPerServing = JSON.stringify(req.menu[i].amountPerServing)
		console.log('item name', itemName)
		console.log('daily %', dailyPercentage)
		console.log('amt per', amtPerServing)
		
		client.hmset('Arbys', 'item', itemName, 'dailyPercentage', dailyPercentage, 'amountPerServing', amtPerServing)
	}
}

export default addHashData