'use strict';

import allRestaurantTitles from '../../data/ListOfRestaurantNames'
const cheerio = require('cheerio');
const request = require('request');

const getRestaurants = (req, res, next) => {



	const url = 'http://www.shapefit.com/restaurants/whataburger-calories.html'

	request(url,(error, response, html) => {
		if(error) console.log('error on cheerio request', error)
		let $ = cheerio.load(html, {
      	normalizeWhitespace: true
      });

		let categories = [];
		let rowData = []

		let columnName = $('table th').each((index, element) => {
			categories.push(cheerio(element).text())
			
		})		
			$('tbody tr').each((index, element) => {
				var children = $(element).children()
				var o = {}
				$(children).each((index, element) => {
					o[categories[index]] = cheerio(element).text()
					rowData.push(o)
				})
				
			})

		// console.log('categories', categories)
		console.log(';LKJ;LKJ', rowData)



		})
}

export default getRestaurants



// {
// 	Restaurant: {
// 		name: 'mcdonalds',
// 		items: {
// 			burger: {
// 				calories: 1000,
// 				carbs: 123,
// 			}
// 		}
// }