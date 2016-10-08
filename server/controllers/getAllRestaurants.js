'use strict';

import allRestaurantTitles from '../../data/ListOfRestaurantNames'
const cheerio = require('cheerio');
const request = require('request');
// currently working just for whataburger for now
const getRestaurants = (req, res, next) => {
	const url = 'http://www.shapefit.com/restaurants/whataburger-calories.html'

	request(url, (error, response, html) => {
		console.log('Cheerio request fired')

		if (error) console.log('error on cheerio request', error)
		let $ = cheerio.load(html, {
			normalizeWhitespace: true
		});
		let categories = [];
		let foodItemInfo = []
		let columnName = $('table th').each((index, element) => {
			categories.push(cheerio(element).text())
		})

		$('tbody tr').each((index, element) => {
			var children = $(element).children('td')
			let o = {}

			$(children).map((index, element) => {
				let key = categories[index].toLowerCase()
				let value = cheerio(element).text().replace(/[^\w\s]/gi, '')

				if (key === 'total carbs') {
					o['carbohydrates'] = value
				} else {
				o[key] = value
				}
			})
			foodItemInfo.push(o)
		})
		res.json(foodItemInfo)
	})
}

export default getRestaurants