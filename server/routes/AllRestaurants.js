const express = require('express')
const router = express.Router()
import getRestaurantMenu from '../controllers/getAllRestaurants'
import parseScrapedData from '../../helpers/ParseScrapedData'


router.get('/', getRestaurantMenu, parseScrapedData)



module.exports = router;