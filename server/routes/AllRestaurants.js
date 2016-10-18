const express = require('express')
const router = express.Router()
import getRestaurantMenu from '../controllers/fastFoodNutrition/getAllRestaurants'
import parseScrapedData from '../../helpers/ParseScrapedData'


router.get('/', getRestaurantMenu, parseScrapedData)



module.exports = router;