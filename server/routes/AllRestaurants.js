const express = require('express')
const router = express.Router()
import getRestaurants from '../controllers/getAllRestaurants'


router.get('/', getRestaurants)


module.exports = router;