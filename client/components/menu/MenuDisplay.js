import React from 'react'
import JsonTable from 'react-json-table'
import ScrollArea from 'react-scrollbar'
import Table from '../compare/Table'

// import Entree from './Entrees'

//loop through menu object - sort and append data to proper position on table 


const MenuDisplay = (props) => {
	console.log('MENU DISPLAY props', props)
		
		const menu = props.menu || [] 

		const columns = [
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

		const settings = {
			headerClass: function() {
				return 'table-head'
			},
			rowClass : function() {
				return 'menu-row'
			}
		}

		return (
			<div className="menu-display">
				<JsonTable className="table-striped" 
									 rows={menu}
									 settings={settings}
									 onClickRow={props.selectMeal}
									 columns={columns} />
			</div>
		)
	}



export default MenuDisplay
