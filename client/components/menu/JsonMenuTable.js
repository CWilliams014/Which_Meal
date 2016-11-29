import React from 'react'
import JsonTable from 'react-json-table'

const JsonMenuTable = (props) => {
	const {menu, selectMeal } = props

	const settings = {
	headerClass: function() {
		return 'table-head'
	},
	rowClass : function() {
		return 'row-centered menu-row'
	},
	noRowsMessage: 'Choose a restaurant!'
	}

	const columns = [
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

	return (
		<div className="menu-display">
			<JsonTable className="menu-table container" 
								 rows={menu}
								 settings={settings}
								 onClickRow={selectMeal}
								 columns={columns} />
		</div>
	)
}



export default JsonMenuTable;