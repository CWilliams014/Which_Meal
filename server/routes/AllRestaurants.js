const express = require('express')
const router = express.Router()
import getRestaurantMenu from '../controllers/fastFoodNutrition/getAllRestaurants'
import makeDataLegible from '../../helpers/MakeDataLegible'
import parseData from '../../helpers/ParseData'
import addHashData from '../controllers/redis/addData'
import checkQueryExistence from '../controllers/redis/checkQuery'


router.get('/', 
	checkQueryExistence, 
	getRestaurantMenu, 
	makeDataLegible, 
	parseData,
	addHashData
)



module.exports = router;