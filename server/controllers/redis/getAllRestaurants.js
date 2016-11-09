const {redis, client} = require('../../../helpers/redis/redis.Config')
import restaurantNames from '../../../data/fastFoodNutritionRestaurantNames'
import editRestaurantTitle from '../../../helpers/EditRestaurantTitle'



const loadAll = (req, res, next) => {
	var menus = []
		
	for(var i = 0; i < restaurantNames.length; i++) {
			let currentRest = editRestaurantTitle(restaurantNames[i])
			
			client.hgetall(currentRest, function(error, response) {
			console.log('loading all', currentRest)
		if(response) {
			menus.push(response)
		}
		else {
			console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', menus)
			res.send(menus)
		}
		})
			
	}
}

export default loadAll