'use strict';
//
const cheerio = require('cheerio');
const request = require('request');
const promise = require('bluebird')
const osmosis = require('osmosis');
const restaurantNames = require('../../../data/fastFoodNutritionRestaurantNames')

const getRestaurantMenu = (req, res, next) => {
	console.log('getRestaurantMenu')
	console.log('req query id', req.query.id)
	let o = {}
	let allItems = []
		//remove spaces from name and add '-' for url param
	let currentRest = req.query.id.replace(/\s+/g, '-').toLowerCase();
	//remove apostrophe
	let currName = currentRest.replace(/'/g, "");
	o.name = currName

	osmosis
		.get('http://fastfoodnutrition.org/' + currName)
		.find('div#contentarea  a.listlink.item_link.active_item_link')
		.set('entreeName')
		.follow('@href')
		.find('div#itemcontainer')
		.contains('Calories')
		.set('Data')
		.data(function(item) {
			allItems.push(item)
		})
		.done(function() {
			o.menu = allItems
			req.restaurantMenu = o
			next()
		})
}



export default getRestaurantMenu