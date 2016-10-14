'use strict';

import allRestaurantTitles from '../../data/ListOfRestaurantNames'
const file = require('../../data/collection')
const cheerio = require('cheerio');
const request = require('request');
var osmosis = require('osmosis');
const fs = require('fs')
// currently hardcoded  for whataburger for now - need to finalize data source
const getRestaurants = (req, res, next) => {
osmosis
.get('http://fastfoodnutrition.org/arbys')
.find('div#contentarea  a.listlink.item_link.active_item_link')
.set('menu item')
.follow('@href')
.find('div#itemcontainer')
.contains('Calories')
.set('DAATTTAAAA')
.data(function(listing) {
    // do something with listing data
    fs.write(file, listing, function(error) {
    	if(error) {
    		console.log('error', error)
    	}
    	console.log('success')
    }).end()
})
.log(console.log)
.error(console.log)
.debug(console.log)
}


export default getRestaurants