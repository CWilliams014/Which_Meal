import React from 'react'
import JsonTable from 'react-json-table'
import ScrollArea from 'react-scrollbar'
import Table from '../compare/Table'

// import Entree from './Entrees'

//loop through menu object - sort and append data to proper position on table 


const MenuDisplay = React.createClass ({

	render() {
		console.log('MENU DISPLAY', this.props)
		const menu = this.props.menu || [] 

		const restaurantDisplayed = this.props.restaurant

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
				<ScrollArea style={{height: '200px', border: '1px solid black'}}>
					<div>
						<JsonTable rows={menu}
											 onClickRow={this.props.selectMeal}
											 columns={columns} />
					</div>
				</ScrollArea>
			</div>
		)
	}
})


export default MenuDisplay

					// <ul>{menuItems}</ul>
					// <ul>{calories}</ul>
					// <ul>{protein}</ul>
					// <ul>{carbohydrates}</ul>
					// <ul>{sugar}</ul>
					// <ul>{satFat}</ul>
					// <ul>{transFat}</ul>
					// <ul>{sodium}</ul>