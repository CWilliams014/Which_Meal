const express = require('express')
const router = express.Router()
import getRestaurantMenu from '../controllers/fastFoodNutrition/getAllRestaurants'
import parseScrapedData from '../../helpers/ParseScrapedData'
import addHashData from '../controllers/redis/addData'
import checkQueryExistence from '../controllers/redis/checkQuery'


router.get('/', 
	checkQueryExistence, 
	getRestaurantMenu, 
	parseScrapedData, 
	addHashData
	)



module.exports = router;