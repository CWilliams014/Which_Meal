import React from 'react'
import JsonTable from 'react-json-table'

// import Entree from './Entrees'

//loop through menu object - sort and append data to proper position on table 

const MenuDisplay = React.createClass ({
	render() {
		console.log('MENU DISPLAY', this.props)
		const menu = this.props.menu

		let menuItems = []
		let calories = []
		let protein = []
		let carbohydrates = []
		let sugar = []
		let satFat = []
		let transFat = []
		let sodium = []

		for(let i = 0; i < menu.length; i++) {
			for(let key in menu[i]) {
				let currentValue = menu[i]
				let currentKey = key.toLowerCase()
				switch(currentKey) {
					case "protein":
						protein.push(<li key={currentKey + i} className={currentKey + i}> {currentValue[key]} </li>)
					break;

					case "calories":
						calories.push(<li key={currentKey + i} className={currentKey + i}> {currentValue[key]} </li>)
					break;
					case "menu item":
						menuItems.push(<li key={currentKey + i} className={currentKey + i}>{currentValue[key]}</li>)
						break;
					case "total carbs": 
						carbohydrates.push(<li key={currentKey + i} className={currentKey + i}>{currentValue[key]}</li>)
						break;
					case "total carbohyrdates":
						carbohydrates.push(<li key={currentKey + i} className={currentKey + i}>{currentValue[key]}</li>)
						break;
					case "sugar": 
						sugar.push(<li key={currentKey + i} className={currentKey + i}>{currentValue[key]}</li>)
						break;
					case "sat fat" :
						satFat.push(<li key={currentKey + i} className={currentKey + i}>{currentValue[key]}</li>)
						break;
					case "trans fat" :
						transFat.push(<li key={currentKey + i} className={currentKey + i}>{currentValue[key]}</li>)
						break
					case  "sodium" :
						sodium.push(<li key={currentKey + i} className={currentKey + i}>{currentValue[key]}</li>)
					default:		
				}
			}
		}
		console.log('protein ', protein)
		console.log('opaosd', this.props.menu)

		let columns = [{key:'menu item', label: 'Menu Items'} , {key: 'calories', label: 'calories'} , {key: 'protein', label: 'Protein'} , {key:'carbohydrates', label: 'Carbohydrates'}, {key: 'sugars', label: 'Sugar'}, {key: 'saturated fat', label: 'Saturated Fat'}, {key:'trans fat', label: 'Trans Fat'}, {key: 'sodium', label: 'Sodium'}]
		
		return (
			<div>
			<JsonTable rows={this.props.menu} columns={columns} />
				<table>
					<thead>
						<tr>
						</tr>
					</thead>
				</table>
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