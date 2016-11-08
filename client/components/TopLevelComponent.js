import React from 'react'
import Dropdown from './DropdownMenu'
import Winner from './Winner'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import MealTable from './tables/MealTable'
import CalculateComparison from './buttons/CalculateComparison'
const CalculateMeals = require('../../helpers/CalculateMeals.js')
import axios from 'axios'
import allRestaurantTitles from '../../data/fastFoodNutritionRestaurantNames'
import MealWrapper from './MealContainer'

// selectRestaurant func not being used right now. But may need functionality for later reference

const TopLevelComponent = React.createClass({
	getInitialState() {
	    return {
	        mealsToCompare: [],
	        restaurantsTitleSelected: [],
	        restaurantsSelected: [],
	        allMenus: [],  
	        winningMeal: '',
	        showTable: false,
	    };
	},

	selectRestaurant(e) {
		e.preventDefault()
		let chosenRestaurantTitle = e.target.name
		let newRestaurantTitleSelected = this.state.restaurantsTitleSelected.slice()
		newRestaurantTitleSelected.push(chosenRestaurantTitle)
		this.setState({restaurantsTitleSelected : chosenRestaurantTitle})
	},

	selectMeal(e, item) {
		let newMealsToCompare = this.state.mealsToCompare.slice()
		if(newMealsToCompare.indexOf(item) === -1	) { 
			newMealsToCompare.push(item)
			this.setState({mealsToCompare: newMealsToCompare, showTable: true})
			console.log('STATE after row click', this.state)
		}
	},

	compareMeals() {
		console.log(CalculateMeals.CalculcateMeals)
		console.log('state meals to compare', this.state.mealsToCompare)
		let winner = CalculateMeals(this.state.mealsToCompare)
		this.setState({winningMeal: winner})
		console.log('compare meals top level', this.state)
	},

	clearMeals() {
		this.setState({mealsToCompare : [], winningMeal: null, showTable: false})
		console.log('clear meals', this.state)
	},


	render() {
		return (
			<div className="flex-container">
				<div className="meal-wrapper 1">
					<MealWrapper restaurantTitles={allRestaurantTitles}
											 restaurantTitles={allRestaurantTitles}	
						 					 selectMeal={this.selectMeal} />
				</div>
				<div className="meal-wrapper 2">
					<MealWrapper 
											restaurantTitles={allRestaurantTitles}	
						 					restaurant={this.state.restaurantSelected} 
						 					selectMeal={this.selectMeal} />
	
					</div>
					<div>
						<MealTable meals={this.state.mealsToCompare}
											 calc={this.compareMeals} />
						<Winner winningMeal={this.state.winningMeal}/>
					</div>
			</div>
		)
	}
})



export default TopLevelComponent

					// <Table calc={this.compareMeals} 
					// 		 	 clearMeals={this.clearMeals}
					// 			 winningMeal={this.state.winningMeal}
					// 			 meals={this.state.mealsToCompare} />



	