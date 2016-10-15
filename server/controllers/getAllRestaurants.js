'use strict';

const cheerio = require('cheerio');
const request = require('request');
const promise = require('bluebird')
var osmosis = require('osmosis');
const fs = require('fs')
// currently hardcoded  for whataburger for now - need to finalize data source
const getRestaurants = (req, res, next) => {
let Allinfo = []

		osmosis
		.get('http://fastfoodnutrition.org/arbys')
		.find('div#contentarea  a.listlink.item_link.active_item_link')
		.set('menu item')
		.follow('@href')
		.find('div#itemcontainer')
		.contains('Calories')
		.set('Data')
		.data(function(listing) { 
		    console.log('EACH LISTING~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~', listing)
		    Allinfo.push(listing)
		})
		.log(console.log)
		.error(console.log)
		.debug(console.log)
		.done(function() {
			res.send(Allinfo)
	})	

}


export default getRestaurants