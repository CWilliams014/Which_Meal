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

const ParseScrapedData = (req, res, next) => {
		// console.log('resssssssSSSSSS', res.)
	let results = []
	let reqInfo = req.restaurantMenu
	let dailyPercentageValue = {}
	let amountPerServing = {}
	let menuItems, parsedMenu, itemName;


	for(let i = 0; i < reqInfo.length; i++) {
			let dataObj = { 'id': i }
			menuItems = reqInfo[i].Data.replace(/\s+/g, " ") 
			parsedMenu =  menuItems.split(" ")
			itemName = reqInfo[i].entreeName
			let p = parsedMenu
			let calories = p[8]
			let caloriesValue = p[9]
			let caloriesFromFat = p[10] + " " +  p[11] + " " + p[12]
			console.log('calories from fat', caloriesFromFat)
			let caloriesFromFatValue = p[13]
			console.log('calores from fat value' + caloriesFromFatValue)
			let totalFat = p[17] + " " + p[18]
			console.log('total fat', totalFat)
			let totalFatValue = p[19]
			console.log('total fat value', totalFatValue)
			let totalFatDV = p[20]
			let satFat = p[21] + " " + p[22]
			console.log('sat fat', satFat)
			let satFatValue = p[23]
			let satFatDV = p[24]
			console.log('sat fat dv', satFatDV)
			let transFat = p[25] + " " + p[26]
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
			let sugarR = sugarsValue.charAt(1) ? parseInt(sugarsValue.charAt(0)) + sugarsValue.charAt(1) : parseInt(sugarsValue.charAt(0))
			console.log('sugar r', sugarR)
			let sugarsDV = (sugarR/20) * 100
			let proteinValue = p[45]
			let proteinDV = p[46]
			let vitaminADV = p[49]
			let vitaminCDV = p[52]
			let calciumDV = p[54]
			let ironDV = p[56]
			dailyPercentageValue = 
			console.log(parsedMenu)
			dataObj['menu item'] = itemName
			dataObj['menu item']
			dataObj['item-info'] = parsedMenu
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
				dataObj.dailyPercentage = dailyPercentageValue
				console.log('hi')
				console.log('daiiiiiiiily %', dataObj)
			results.push(dataObj)
		}
}

export default ParseScrapedData
			// dataObj['daily %'] = {parsedMenu[17] + parsedMenu[18] : parsedMenu[19]}