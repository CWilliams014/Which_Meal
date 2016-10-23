import React from 'react'
import createFragment from 'react-addons-create-fragment';
import JsonTable from 'react-json-table'
import ClearFields from '.././buttons/ClearFields'
import CalculateComparison from '.././buttons/CalculateComparison'

const Table = (props) => {
	console.log('table props', props)
	let meals = props.meals || []
		let columns = [
			{key:'menu item', label: 'Menu Items', cell: function(item) {
				return item.itemName
			}}, 
			{key: 'calories', label: 'Calories', cell: function(item) {
				return item.amountPerServing.calories
			}} , 
			{key: 'protein', label: 'Protein', cell: function(item) {
				return (item.dailyPercentageValue.proteinDV + ' , ' + item.amountPerServing.proteinValue)
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
		<div>
			<JsonTable  rows={props.meals} columns={columns} />
				<CalculateComparison calc={props.calc} />
			<ClearFields clearMeals={props.clearMeals} />
		</div>
		)
	}





export default Table