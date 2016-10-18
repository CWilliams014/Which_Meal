import React from 'react'
import JsonTable from 'react-json-table'
import ScrollArea from 'react-scrollbar'
import Table from '../compare/Table'

// import Entree from './Entrees'

//loop through menu object - sort and append data to proper position on table 

const MenuDisplay = React.createClass ({
<<<<<<< HEAD
	
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
			{key: 'calories', label: 'Calories'} , 
			{key: 'protein', label: 'Protein'} , 
			{key:'carbohydrates', label: 'Carbohydrates'}, 
			{key: 'sugars', label: 'Sugar'}, 
			{key: 'sat fat', label: 'Saturated Fat'}, 
			{key:'trans fat', label: 'Trans Fat'}, 
			{key: 'sodium', label: 'Sodium'},
			{key: 'fiber', label: 'Fiber'}
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