const express = require('express')
const router = express.Router()
import getRestaurantMenu from '../controllers/fastFoodNutrition/getAllRestaurants'
import parseScrapedData from '../../helpers/ParseScrapedData'
import addHashData from '../controllers/redis/addData'


router.get('/', getRestaurantMenu, parseScrapedData, addHashData)



module.exports = router;