import React from 'react'
import Dropdown from './DropdownMenu'
import Winner from './Winner'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import MealCompareTable from './tables/MealTable'
import CalculateComparison from './buttons/CalculateComparison'
const CalculateMeals = require('../../helpers/CalculateMeals.js')
import axios from 'axios'
import allRestaurantTitles from '../../data/fastFoodNutritionRestaurantNames'
import MealWrapper from './MealContainer'
import Header from './header/Header'

// selectRestaurant func not being used right now. But may need functionality for later reference

const TopLevelComponent = React.createClass({
	getInitialState() {
    return {
      mealsToCompare: [],
      allRestaurantMenus : {},
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
		}
	},

	addSelectedRestaurant(obj) {
		console.log('received obj', obj)
		let newRestaurantsSelected = Object.assign({}, this.state.restaurantsSelected, obj)
		this.setState({restaurantsSelected : newRestaurantsSelected})
		console.log('restaurant added', this.state.restaurantsSelected)
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
			<div className="container-fluid">
			<div className="row">
				<Header />
						<div className="col-sm-6 meal-wrapper 1">
							<MealWrapper restaurantTitles={allRestaurantTitles}
													 restaurantTitles={allRestaurantTitles}	
													 restaurantsSelected={this.state.restaurantsSelected}
													 addSelectedRestaurant={this.addSelectedRestaurant}
								 					 selectMeal={this.selectMeal} />
							</div>
						</div>
					<div className="col-sm-6">
					{this.state.showTable &&
						<MealCompareTable meals={this.state.mealsToCompare}
												 calc={this.compareMeals} />}
						
						
							<Winner winningMeal={this.state.winningMeal}
							/>
					</div>
			</div>
		)
	}
})



export default TopLevelComponent


						// <div className="col-sm-6 meal-wrapper 2">
						// 	<MealWrapper  addSelectedRestaurant={this.addSelectedRestaurant}
						// 								restaurantTitles={allRestaurantTitles}
						// 								restaurantsSelected={this.state.restaurantsSelected}
						// 		 						restaurant={this.state.restaurantSelected} 
						// 		 						selectMeal={this.selectMeal} />
						// 	</div>

					// <Table calc={this.compareMeals} 
					// 		 	 clearMeals={this.clearMeals}
					// 			 winningMeal={this.state.winningMeal}
					// 			 meals={this.state.mealsToCompare} />

	// componentDidMount() {
	// 	axios.get('/loadAll').then((response) => {
	// 		console.log('respnoseeeee', response)
	// 	})
	// },


	