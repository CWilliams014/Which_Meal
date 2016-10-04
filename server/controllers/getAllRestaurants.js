'use strict';

const cheerio = require('cheerio');
const request = require('request');

const getRestaurants = (req, res, next) => {
	const url = 'http://fastfoodnutrition.org/'

	request(url,(error, response, html) => {
		if(error) console.log('error on cheerio request', error)

		let $ = cheerio.load(html, {
      	normalizeWhitespace: true
      });

		let restaurantTitles = [];

		var listItem = $('div.container.main_container div div.hidden-sm.hidden-xs.left_column ul.list  li').each((index, element) => {
			restaurantTitles.push(cheerio(element).text())
			console.log(cheerio(element).text())
		})
		// res.json(restaurantTitles)
		let restaurantItems = []
		let nextURL;

		for(var i = 0; i < restaurantTitles.length; i++) {
			console.log('in for loop')
			request(url + restaurantTitles[i], (error, response, html) => {
				let foodItem = $('ul.col-xs-12.col-sm-6.rest_item_list li a').each((index, element) => {
					console.log('FOODITEM', element)
				})
			})
		}

	})
}

export default getRestaurants