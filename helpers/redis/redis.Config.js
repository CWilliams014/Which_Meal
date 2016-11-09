const redis = require('redis')
const client = redis.createClient(6377, '107.170.50.171')
client.auth('asdfjk123%')

module.exports = { redis, client }


