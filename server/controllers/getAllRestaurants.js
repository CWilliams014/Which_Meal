'use strict';
//
const cheerio = require('cheerio');
const request = require('request');
const promise = require('bluebird')
var osmosis = require('osmosis');
const fs = require('fs')


const getRestaurantMenu = (req, res, next) => {
let allInfo = []
let results = []
let id = 0
		osmosis
		.get('http://fastfoodnutrition.org/arbys')
		.find('div#contentarea  a.listlink.item_link.active_item_link')
		.set('entreeName')
		.follow('@href')
		.find('div#itemcontainer')
		.contains('Calories')
		.set('Data')
		.data(function(item) {
		    allInfo.push(item)
		})
		.done(function() {
			req.restaurantMenu = allInfo
			next()
	})
}


export default getRestaurants
			
		// .log(console.log)
		// .error(console.log)
		// .debug(console.log)

	// 			for(let i = 0; i < Allinfo.length; i++) {
	// 		let items = Allinfo[i].Data.replace(/\s+/g, " ")
	// 		let parsedMenu = items.split(" ")
	// 		results.push(parsedMenu)
	// 		req.menus = results
	// 	}
	// 	console.log('reeeeeesults', Allinfo)
	// 	req.info=results
	// 	res.send(results)
	// 	next()
	// })