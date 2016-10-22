

const parseData = (req, res, next) => {
	console.log('parseData')
	let finishedMenu = []

	let menuArray = req.parsedMenu
	let l = req.parsedMenu.length;
	for(var i = 0; i < l; i++) {
		let finalEntree = {}
		let amountPerServing = {}
		let dailyPercentageValue = {}
		let currEntree = menuArray[i]
		for(var j = 0; j < l; j++) {
			finalEntree.itemName = currEntree[0]
			if(currEntree[j] === 'Calories' && isNaN(currEntree[j+1]) === false) {
				amountPerServing.calories = currEntree[j+1]
			}
			if(currEntree[j] === 'Total' && currEntree[j+1] === 'Fat') {
  			amountPerServing.totalFatValue = currEntree[j + 2]
  			dailyPercentageValue.totalFatDV = currEntree[j+ 3]
  		}
  		if(currEntree[j] === 'Saturated') {
  		amountPerServing.satFatValue = currEntree[j + 2]
  		dailyPercentageValue.satFatDV = currEntree[j + 3]
  		}
  		if(currEntree[j] === 'Trans') {
  			amountPerServing.transFatValue = currEntree[j + 2]
  		}
  		if(currEntree[j] === 'Cholesterol') {
  		amountPerServing.cholesterolValue = currEntree[j+1]
  		dailyPercentageValue.cholesterolDV = currEntree[j+2]
  		}
  		if(currEntree[j] === 'Sodium') {
  			amountPerServing.sodiumValue = currEntree[j+1]
  			dailyPercentageValue.sodiumDV = currEntree[j+2]
  		}
  		if(currEntree[j] === 'Total' && currEntree[j+1] === 'Carbohydrates') {
  		amountPerServing.totalCarbsValue = currEntree[j+2]
  		dailyPercentageValue.totalCarbsDV = currEntree[j+3]
  		}
  		if(currEntree[j] === 'Fiber') {
  		amountPerServing.dietaryFiberValue = currEntree[j+1]
  		dailyPercentageValue.dietaryFiberDV = currEntree[j+2]
  		}
  		if(currEntree[j] === 'Sugars') {
  		amountPerServing.sugarsValue = currEntree[j+1] 
  		}
  		if(currEntree[j]  === 'Protein') {
  		amountPerServing.proteinValue = currEntree[j+1] 
  		dailyPercentageValue.proteinDV = currEntree[j+2] 
  		}
  		if(currEntree[j] === 'A') {
  			dailyPercentageValue.vitaminA = currEntree[j+1] 
  		}
  		if(currEntree[j] === 'C') {
  			dailyPercentageValue.vitaminC = currEntree[j+1] 
  		}
  		if(currEntree[j] === 'Calcium') {
  			dailyPercentageValue.calcium = currEntree[j+1] 
  		}
  		if(currEntree[j] === 'Iron') {
  			dailyPercentageValue.iron = currEntree[j+1] 
  		}
		}
		finalEntree.amountPerServing = amountPerServing
		finalEntree.dailyPercentageValue = dailyPercentageValue
		finishedMenu.push(finalEntree)
	}
	// console.log('~~~~~~~~~~~~~', finishedMenu)
}


export default parseData