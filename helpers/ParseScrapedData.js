//Parse data gathered from osmosis into acceptable format for redis Hash data type

//Json table component receiving the data will want each menu to an array of objects with nutrients and values

//e.x.
//HSET Arbys: Arbys Burger Deluxe calories 40 vitamin k 100
/* Arbys = {
	menu item: 'Arbys Burger Deluxe', 
	daily %: {
		vitamin k: 5
		vitamin C: 5
		sodium: 30,

	},
	Amount per serving: {
		calories: 40,
		vitamin K: 8,
		sodium: 30
		}
	}
	
}  */

const parseScrapedData = (req, res, next) => {
		// console.log('resssssssSSSSSS', res.)
	let results = []
	let reqInfo = req.restaurantMenu
	let dailyPercentageValue = {}
	let amountPerServing = {}
	let menuItems, parsedMenu, itemName;


	for(let i = 0; i < reqInfo.length; i++) {
			let restaurantFinalMenu = { 'id': i }
			menuItems = reqInfo[i].Data.replace(/\s+/g, " ") 
			parsedMenu =  menuItems.split(" ")
			itemName = reqInfo[i].entreeName

			let p = parsedMenu
			let calories = p[8]
			let caloriesValue = p[9]
			let caloriesFromFat = p[10] + " " +  p[11] + " " + p[12]
			let caloriesFromFatValue = p[13]
			let totalFat = p[17] + " " + p[18]
			let totalFatValue = p[19]
			let totalFatDV = p[20]
			let satFatValue = p[23]
			let satFatDV = p[24]
			let transFatValue = p[26]
			let transFatDV = p[27]
			let cholesterolValue = p[29]
			let cholesterolDV = p[30]
			let sodiumValue = p[32]
			let sodiumDV = p[33]
			let totalCarbsValue = p[36]
			let totalCarbsDV = p[37]
			let dietaryFiberValue = p[40]
			let dietaryFiberDV=p[41]
			let sugarsValue = p[43]
			// eliminates letter 'g' from sugar value, calculates DV based on 20g serving of sugar per day
			let sugarR = Number.isInteger(sugarsValue.charAt(1)) ? parseInt(sugarsValue.charAt(0)) + sugarsValue.charAt(1) : parseInt(sugarsValue.charAt(0))
			console.log('sugar r', sugarR)
			let sugarsDV = (sugarR/20) * 100 + '%'
			let proteinValue = p[45]
			let proteinDV = p[46]
			let vitaminADV = p[49]
			let vitaminCDV = p[52]
			let calciumDV = p[54]
			let ironDV = p[56]

			restaurantFinalMenu['menu item'] = itemName
			restaurantFinalMenu['item-info'] = parsedMenu

			dailyPercentageValue = {
				'calories from fat' : caloriesFromFatValue,
				'total fat': totalFatDV,
				'sat fat' : satFatDV,
				'trans fat': transFatDV,
				'cholesterol': cholesterolDV,
				'sodium' : sodiumDV,
				'total carbs' : totalCarbsDV,
				'dietary fiber': dietaryFiberDV,
				'sugars' : sugarsDV,
				'protein' : proteinDV,
				'vitamin A' : vitaminADV,
				'vitamin C' : vitaminCDV,
				'calcium' : calciumDV,
				'iron' : ironDV
				}
			amountPerServing = {
				'calories' : caloriesValue,
				'total fat': totalFatValue,
				'sat fat' : satFatValue,
				'trans fat': transFatValue,
				'cholesterol': cholesterolValue,
				'sodium' : sodiumValue,
				'total carbs' : totalCarbsValue,
				'dietary fiber': dietaryFiberValue,
				'sugars' : sugarsValue,
				'protein' : proteinValue,
			}
				restaurantFinalMenu.dailyPercentage = dailyPercentageValue
				restaurantFinalMenu.amountPerServing = amountPerServing
			results.push(restaurantFinalMenu)
		}
		res.send(results)
}

export default parseScrapedData