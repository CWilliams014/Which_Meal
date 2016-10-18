const express = require('express')
const router = express.Router()
import getRestaurants from '../controllers/getAllRestaurants'
import ParseScrapedData from '../../helpers/ParseScrapedData'


router.get('/', getRestaurants, ParseScrapedData)



module.exports = router;