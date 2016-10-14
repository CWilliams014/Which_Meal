// input are meals current selected in state.mealsToCompare, which are cloned, added a score property, and iterated over with their nutrient value determining the weight of the variable which updates the objects score. Highest score is returned
//TODO: update nutrient calculations

const Calculate = function(obj1, obj2) {
	console.log('calculate function running')
	let proteinWeight, transWeight, sodiumWeight, carbsWeight, sugarWeight, satFatWeight, caloriesWeight;
	let obj1Clone = JSON.parse(JSON.stringify(obj1));
	let obj2Clone = JSON.parse(JSON.stringify(obj2));
	let winner = []
	let Os = [obj1Clone, obj2Clone]
	
	obj1Clone.score = 0;
	obj2Clone.score = 0;

	Os.forEach((element, index) => {
		
		for (let value in element) {
			let keyWithoutSpace = value.replace(/ /g, '')
			console.log('key', keyWithoutSpace)
			if (keyWithoutSpace === 'protein') {
				if (element[value] < 35 && element[value] > 15) {
					proteinWeight = 100
				}
				if (element[value] < 15 || element[value] > 35) {
					proteinWeight = 80
				}
				element.score += element[value] * proteinWeight
				console.log('p', element.score)
			}
			if (keyWithoutSpace === 'calories') {
				if (element[value] <= 1000) {
					caloriesWeight = 100
				}
				if (element[value] > 1000 && element[value] < 1500) {
					caloriesWeight = 80
				}
				if (element[value] > 1500) {
					caloriesWeight = 70
				}
				element.score += element[value] * caloriesWeight
			}
			if (keyWithoutSpace === 'transfat') {
				if (element[value] <= 1) {
					transWeight = 100
				}
				if (element[value] < 2 && element[value] > 1) {
					transWeight = 85
				}
				if (element[value] > 2) {
					transWeight = 75
				}
				element.score += element[value] * transWeight
			}
			if (keyWithoutSpace === 'sodium') {
				if (element[value] > 800 && element[value] < 1300) {
					sodiumWeight = 100
				}
				if (element[value] < 800) {
					sodiumWeight = 100
				}
				if (element[value] < 2000 && element[value] >= 1500) {
					sodiumWeight = 70
				}
				if (element[value] > 2000) {
					sodiumWeight = 50
				}
				element.score += element[value] * sodiumWeight
			}
			if (keyWithoutSpace === 'carbohydrates') {
				if (element[value] > 100 && element[value] < 130) {
					carbsWeight = 90
				}
				if (element[value] < 100) {
					carbsWeight = 100
				}
				if (element[value] > 130) {
					carbsWeight = 70
				}
				element.score += element[value] * carbsWeight
			}
		}
		console.log(obj1Clone.score)
	})
	if(obj1Clone.score > obj2Clone.score) {
		winner.push(obj1Clone)
	} else {
		winner.push(obj2Clone)
	} 
	console.log('winner', winner)
	return winner
}





export default Calculate 


