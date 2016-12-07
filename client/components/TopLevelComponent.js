import React from 'react'
import Dropdown from './DropdownMenu'
import Winner from './Winner'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import MealCompareTable from './tables/MealCompareTable'
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
      showHeader: true,
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
			this.setState({mealsToCompare: newMealsToCompare, showTable: true, showHeader: false})
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
		let selectedMeals;
		let header;
		if(this.state.showTable) {
			selectedMeals = ( <div className="container-fluid text-center"> 
													<MealCompareTable meals={this.state.mealsToCompare}
												 										calc={this.compareMeals} /> 
												</div>
											)
		}	else {
			selectedMeals = (<div></div>)
		}

		if(this.state.showHeader) { selectedMeals = (<Header/>) }
		return (
			<div className="container-fluid">
			<div className="row">
				<Header />
					{selectedMeals}
						<div className="col-sm-6 meal-wrapper 1">
							<MealWrapper restaurantTitles={allRestaurantTitles}
													 restaurantTitles={allRestaurantTitles}	
													 restaurantsSelected={this.state.restaurantsSelected}
													 addSelectedRestaurant={this.addSelectedRestaurant}
								 					 selectMeal={this.selectMeal} />
							</div>
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


	