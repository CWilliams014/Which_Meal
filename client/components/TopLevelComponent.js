import React from 'react'
import SearchBar from './SearchBar'
import Dropdown from './DropdownMenu'
import Winner from './Winner'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import Table from './compare/Table'
import CalculateComparison from './buttons/CalculateComparison'
import Calculate from '.././helpers/CalculateMeals'
import axios from 'axios'
import allRestaurantTitles from '../../data/ListOfRestaurantNames'
import MealWrapper from './MealContainer'



const TopLevelComponent = React.createClass({
	getInitialState() {
	    return {
	        restaurantTitles: [],
	        mealsToCompare: [],
	        restaurantSelected: '',
	        menuDisplayed: '',
	        meal1: '',
	        meal2: '',
	        allMenus: [],  
	        winningMeal: '',
	        showTable: false,
	    };
	},

	selectRestaurant(e) {
		e.preventDefault()
		console.log('select restaurant', e.target.name)
		this.setState({restaurantSelected : e.target.name})
		this.getRestaurantData(e.target.name)
	},

	selectMeal(e, item) {
		e.preventDefault()
		let newMealsToCompare = this.state.mealsToCompare.slice()
		if(newMealsToCompare.indexOf(item) === -1	) { 
			newMealsToCompare.push(item)
			this.setState({mealsToCompare: newMealsToCompare, showTable: true})
			console.log('STATE after row click', this.state)
		}
	},

	compareMeals() {
		let winner = Calculate(this.state.mealsToCompare[0], this.state.mealsToCompare[1])
		this.setState({winningMeal: winner})
		console.log('compare meals top level', this.state)
	},

	clearMeals() {
		this.setState({mealsToCompare : [], winningMeal: null, showTable: false})
		console.log('clear meals', this.state)
	},

	render() {

		return (
			<div className="row-fluid">
				<div className="col-xs-6">
					<MealWrapper 
											restaurantSelected={this.state.restaurantSelected}
											restaurantTitles={allRestaurantTitles}	
						 					restaurant={this.state.restaurantSelected} 
						 					selectMeal={this.selectMeal} />
				</div>
				<div className="col-xs-6">
					<MealWrapper 
											restaurantSelected={this.state.restaurantSelected}
											restaurantTitles={allRestaurantTitles}	
						 					restaurant={this.state.restaurantSelected} 
						 					selectMeal={this.selectMeal} />
				</div>
				{this.state.showTable &&
					<Table calc={this.compareMeals} 
							 	 clearMeals={this.clearMeals}
								 winningMeal={this.state.winningMeal}
								 meals={this.state.mealsToCompare} />
				}
				<Winner winningMeal={this.state.winningMeal}/>	
			</div>
		)
	}
})

export default TopLevelComponent

				// <Dropdown selectRestaurant={this.selectRestaurant}
				// 					restaurantSelected={this.state.restaurantSelected}
				// 					restaurantTitles={allRestaurantTitles}	/>

				// <SelectedRestaurant restaurant={this.state.restaurantSelected} />
				// <MenuDisplay selectMeal={this.selectMeal} 
				// 						 menu={this.state.allMenus} />

// <SearchBar restaurantList={this.state.restaurants}/>