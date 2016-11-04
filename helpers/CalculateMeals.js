// input are meals current selected in state.mealsToCompare, which are cloned, added a score property, and iterated over with their nutrient value determining the weight of the variable which updates the objects score. Highest score is returned

// TODO: 
//	- add sugars and other nutrients
//	- refactor for speed - get to O(n)
	// - talk to nutritionist about weighing variables
	// - allow stacking menu items
	// - allow comparison of any # of meals

const CalculateMeals = (collection) => {
	console.log('calculate function running', collection)


	let proteinWeight, transWeight, sodiumWeight, carbsWeight, sugarWeight, satFatWeight, caloriesWeight;
	let obj1Clone = JSON.parse(JSON.stringify(collection[0]));
	let obj2Clone = JSON.parse(JSON.stringify(collection[1]));
	let winner = []

	let mealsToCalculate = [obj1Clone, obj2Clone]

	// for(let i = 0; i < collection.length; i++) {
	// 	console.log('collection i', collection[i])
	// 	let currentMeal = collection[i]
	// 	let mealsToCalculate.push(JSON.parse(JSON.stringify(currentMeal))
	// }


	mealsToCalculate.forEach((element, index) => {
		console.log('INDEX', index)
		let highest = Number.NEGATIVE_INFINITY
		let lowest = Number.POSITIVE_INFINITY
		let temp;
		element.score = 0;

		for (let value in element.amountPerServing) {
			let nutrVal = parseInt(element.amountPerServing[value])
			console.log('nutrVal', nutrVal)

			let keyWithoutSpace = value.replace(/ /g, '')
			console.log('key', keyWithoutSpace)
			if (keyWithoutSpace === 'proteinValue') {
				if (nutrVal < 35 && nutrVal > 15) {
					proteinWeight = 100
				}
				if (nutrVal < 15 || nutrVal > 35) {
					proteinWeight = 80
				}
				element.score += nutrVal * proteinWeight
				console.log('p', element.score)
			}
			if (keyWithoutSpace === 'calories') {
				if (nutrVal <= 1000) {
					caloriesWeight = 100
				}
				if (nutrVal > 1000 && nutrVal < 1500) {
					caloriesWeight = 80
				}
				if (nutrVal > 1500) {
					caloriesWeight = 70
				}
				element.score += nutrVal * caloriesWeight
			}
			if (keyWithoutSpace === 'transfatValue') {
				if (nutrVal <= 1) {
					transWeight = 100
				}
				if (nutrVal < 2 && nutrVal > 1) {
					transWeight = 85
				}
				if (nutrVal > 2) {
					transWeight = 75
				}
				element.score += nutrVal * transWeight
			}
			if (keyWithoutSpace === 'sodiumValue') {
				if (nutrVal > 800 && nutrVal < 1300) {
					sodiumWeight = 100
				}
				if (nutrVal < 800) {
					sodiumWeight = 100
				}
				if (nutrVal < 2000 && nutrVal >= 1500) {
					sodiumWeight = 70
				}
				if (nutrVal > 2000) {
					sodiumWeight = 50
				}
				element.score += nutrVal * sodiumWeight
			}
			if (keyWithoutSpace === 'totalCarbsValue') {
				if (nutrVal > 100 && nutrVal < 130) {
					carbsWeight = 90
				}
				if (nutrVal < 100) {
					carbsWeight = 100
				}
				if (nutrVal > 130) {
					carbsWeight = 70
				}
				element.score += nutrVal * carbsWeight
			}

		}
		if(element.score > highest) {
			highest = element
		}
		if(element.score < lowest) {
			lowest = element
		}
		console.log('meals calc [0]', mealsToCalculate[0])
	})
	console.log('winner', winner)

}





module.exports = { CalculateMeals }


