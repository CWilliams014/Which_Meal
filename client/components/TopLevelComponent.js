import React from 'react'
import SearchBar from './SearchBar'
import MealContainer from './mealContainers/MealContainer'
import Dropdown from './DropdownMenu'
import Winner from './Winner'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import Table from './compare/Table'
import CalculateComparison from './buttons/CalculateComparison'
import Calculate from '.././helpers/CalculateMeals'
import axios from 'axios'
import allRestaurantTitles from '../../data/fastFoodNutritionRestaurantNames'
import MealWrapper from './MealContainer'

// Assigning each selected restaurant an id which will align with the restaurantsSelected array and 
	//determine which mealContainer component is displaying which restaurants information

const TopLevelComponent = React.createClass({
	getInitialState() {
	    return {
	        restaurantTitles: [],
	        mealsToCompare: [],
	        restaurantsTitleSelected: [],
	        restaurantsSelected: [],
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
		let chosenRestaurantTitle = e.target.name
		let newRestaurantTitleSelected = this.state.restaurantsTitleSelected.slice()
		newRestaurantTitleSelected.push(chosenRestaurantTitle)
		this.setState({restaurantsTitleSelected : chosenRestaurantTitle})
	},

	findRestaurant() {
		let restaurantsSelectedAdded = this.state.restaurantsSelected.slice()
		for(var i = 0; i < this.state.allMenus.length; i++) {
			if(this.state.allMenus[i].title === restaurantSelected[restaurantSelected.length - 1]) {
				this.state.allMenus[i].id = RestaurantID
				restaurantsSelectedAdded.push(this.state.allMenus[i])
			}
		}
		RestaurantID++
		this.setState({restaurantsSelected: restaurantsSelectedAdded})
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


	// // componentDidMount() {
	// // 	return axios.get('/restaurants').then((response) => {
	// // 		console.log('response comp did mount', response )
	// // 		this.setState({allMenus: response.data})
	// // 	})
	// }, 