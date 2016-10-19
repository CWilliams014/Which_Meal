const redis = require('redis')
const client = redis.createClient(6377, '107.170.50.171')
client.auth('asdfjk123%')

const checkQueryExistence = (req, res, next) => {
	//remove spaces and apostrophe from query and add '-' 
	let restName = req.query.id.replace(/\s+/g, '-').toLowerCase();
	let finalRestName = restName.replace(/'/g, "")
	
	// check if restaurant name has been queried before. If so immediately send results, if not continue down middleware

	client.get(finalRestName, function(error, results) {
		if(error) {
			console.log('check query error', error)
		} 
		if(results) {
			console.log('found in redis dbs')
			res.send(result)
		} else {
			console.log('query not in redis')
			next()
		}
	})
}

export default checkQueryExistence 