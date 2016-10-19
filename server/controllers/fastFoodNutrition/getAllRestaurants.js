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
	let currName = currentRest.replace(/'/g,"");
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
			
		// .log(console.log)
		// .error(console.log)
		// .debug(console.log)

// let allInfo = []
// 	osmosis
// 		.get('http://fastfoodnutrition.org/arbys')
// 		.find('div#contentarea  a.listlink.item_link.active_item_link')
// 		.set('entreeName')
// 		.follow('@href')
// 		.find('div#itemcontainer')
// 		.contains('Calories')
// 		.set('Data')
// 		.data(function(item) {
// 		    allInfo.push(item)
// 		})
// 		.done(function() {
// 			req.restaurantMenu = allInfo
		
// 		next()
// 	})



	// const l = restaurantNames.length
	// let allRestInfo = []

	// return new Promise(function(resolve, reject) {

	// 		for(var i = 0; i < l; i++) {
	// 			let o = {}
	// 			let allItems = []
	// 			//remove spaces from name and add '-' for url param
	// 			let currentRest = restaurantNames[i].replace(/\s+/g, '-').toLowerCase();
	// 			//remove apostrophe
	// 			let currName = currentRest.replace(/'/g,"");
	// 			o.name = currName

	// 			osmosis
	// 				.get('http://fastfoodnutrition.org/' + currName)
	// 				.find('div#contentarea  a.listlink.item_link.active_item_link')
	// 				.set('entreeName')
	// 				.follow('@href')
	// 				.find('div#itemcontainer')
	// 				.contains('Calories')
	// 				.set('Data')
	// 				.data(function(item) {
	// 				    allItems.push(item)
	// 				})
	// 				.done(function() {
	// 					o.menu = allItems
	// 					allRestInfo.push(o)
	// 					req.restaurantMenu = allRestInfo
	// 			})
	// 				req.a = allRestInfo
	// 		}
	// 	}).done(function(next) {
	// 		req.b = allRestInfo
	// 		next()
	// 	})