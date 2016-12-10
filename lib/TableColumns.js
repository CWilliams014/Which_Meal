	const tableColumns = [
		{key:'menu item', label: 'Menu Items', cell: function(item) {
			return item.itemName 
		}}, 
		{key: 'calories', label: 'Calories', cell: function(item) {
			return item.amountPerServing.calories
		}} , 
		{key: 'protein', label: 'Protein', cell: function(item) {
			let elemDV = item.dailyPercentageValue.proteinDV || ""
			let elemAps = item.amountPerServing.proteinValue || ""
			let comma = elemDV && elemAps ? " , " : ""
			
			return (`${elemDV}${comma}${elemAps}`)
		}} , 
		{key:'carbohydrates', label: 'Carbohydrates', cell: function(item) {
			return (item.dailyPercentageValue.totalCarbsDV + ' , ' + item.amountPerServing.totalCarbsValue)
		}}, 
		{key: 'sugars', label: 'Sugar', cell: function(item) {
			return (item.amountPerServing.sugarsValue)
		}}, 
		{key: 'sat fat', label: 'Saturated Fat', cell: function(item) {
			return (item.dailyPercentageValue.satFatDV + ' , ' + item.amountPerServing.satFatValue)
		}},  
		{key: 'sodium', label: 'Sodium', cell: function(item) {
			return (item.amountPerServing.sodiumValue + ' , ' + item.dailyPercentageValue.sodiumDV)
		}},
		{key: 'dietary fiber', label: 'Fiber', cell: function(item) {
			return (item.dailyPercentageValue.dietaryFiberDV + ' , ' + item.amountPerServing.dietaryFiberValue)
		}}	
	]

module.exports = tableColumns