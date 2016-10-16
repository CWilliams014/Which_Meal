const express = require('express')
const router = express.Router()
import getRestaurants from '../controllers/getAllRestaurants'


router.get('/', getRestaurants, function(req, res, next) {
	console.log('parse', req)
})


module.exports = router;