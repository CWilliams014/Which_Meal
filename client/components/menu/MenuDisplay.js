import React from 'react'
import JsonTable from 'react-json-table'
import ScrollArea from 'react-scrollbar'
import Table from '../compare/Table'

// import Entree from './Entrees'

//loop through menu object - sort and append data to proper position on table 

const MenuDisplay = React.createClass ({
	
	componentWillReceiveProps(nextProps) {
		if(nextProps != this.props.menu) {
			this.render()
		}
	},

	render() {
		console.log('MENU DISPLAY', this.props)
		const menu = this.props.menu
		const restaurantDisplayed = this.props.restaurant

		let columns = [
			{key:'menu item', label: 'Menu Items'}, 
			{key: 'calories', label: 'Calories', cell: function(item) {
				return item.amountPerServing['calories']
			}} , 
			{key: 'protein', label: 'Protein', cell: function(item) {
				return (item.dailyPercentage['protein'] + ' , ' + item.amountPerServing['protein'])
			}} , 
			{key:'carbohydrates', label: 'Carbohydrates', cell: function(item) {
				let carbValueCheck = item.amountPerServing['total carbs']
				if(carbValueCheck === 'Carbohydrates') carbValueCheck = ''
				return (item.dailyPercentage['total carbs'] + ' , ' + carbValueCheck)
			}}, 
			{key: 'sugars', label: 'Sugar', cell: function(item) {
				return (item.dailyPercentage['sugars'] + ' , ' + item.amountPerServing['sugars'])
			}}, 
			{key: 'sat fat', label: 'Saturated Fat', cell: function(item) {
				return (item.dailyPercentage['sat fat'] + ' , ' + item.amountPerServing['sat fat'])
			}},  
			{key: 'sodium', label: 'Sodium', cell: function(item) {
				return (item.amountPerServing['sodium'])
			}},
			{key: 'dietary fiber', label: 'Fiber', cell: function(item) {
				return (item.dailyPercentage['dietary fiber'] + ' , ' + item.amountPerServing['dietary fiber'])
			}}
			]
		
		return (
			<div>
				<ScrollArea style={{height: '200px', border: '1px solid black'}}>
					<div>
						<JsonTable rows={this.props.menu} 
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