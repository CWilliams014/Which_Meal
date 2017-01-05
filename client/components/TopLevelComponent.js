import React from 'react'
import Dropdown from './DropdownMenu'
import Winner from './Winner'
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import MealCompareTable from './tables/MealCompareTable'
import CalculateComparison from './buttons/CalculateComparison'
const CalculateMeals = require('../../helpers/CalculateMeals.js')
import axios from 'axios'
import allRestaurantTitles from '../../data/fastFoodNutritionRestaurantNames'
import MealWrapper from './MealContainer'
import Header from './header/Header'
import HeaderNavBar from './header/HeaderNavBar'
import About from './about/About'



const TopLevelComponent = React.createClass({
	getInitialState() {
    return {
      mealsToCompare: [],
      allRestaurantMenus : {},
      restaurantsSelected: [],
      allMenus: [],  
      winningMeal: '',
      showTable: false,
      showHeader: true,
      initialLoad : true,
      button: {
      	launched: false
      }
    };
	},

	moveButton() {
		this.setState({initialLoad : false})
	},

	selectMeal(e, item) {
		let newMealsToCompare = this.state.mealsToCompare.slice()
		if(newMealsToCompare.indexOf(item) === -1	) { 
			newMealsToCompare.push(item)
			this.setState({mealsToCompare: newMealsToCompare, showTable: true, showHeader: false})
		}
	},

	addSelectedRestaurant(obj) {
		let newRestaurantsSelected = Object.assign({}, this.state.restaurantsSelected, obj)
		this.setState({restaurantsSelected : newRestaurantsSelected})
	},

	compareMeals() {
		let winner = CalculateMeals(this.state.mealsToCompare)
		console.log('winner state', winner)
		this.setState({winningMeal: winner})
		console.log('state winner', this.state)
	},

	clearMeals() {
		this.setState({mealsToCompare : [], winningMeal: '', showTable: false})
	},


	render() {
		let selectedMeals, header, mainButton

		if(this.state.showTable) {
			selectedMeals = ( <div className="container-fluid text-center"> <MealCompareTable compare={this.compareMeals} meals={this.state.mealsToCompare} clear={this.clearMeals} winner={this.state.winningMeal} /> </div> )
		}	


		return (

				<div className="container-fluid">
					<div className="row main-row">

						<Header showHeader={this.state.showHeader} />
						{mainButton}
						{selectedMeals}
						<div className="col-sm-6 meal-wrapper 1">
							<MealWrapper restaurantTitles={allRestaurantTitles}	
													 initialLoad={this.state.initialLoad}
													 restaurantsSelected={this.state.restaurantsSelected}
													 addSelectedRestaurant={this.addSelectedRestaurant}
													 moveButton={this.moveButton}
													 initialLoad={this.state.initialLoad}
								 					 selectMeal={this.selectMeal} />
						</div>		
					</div>

				</div>

		)
	}
})



export default TopLevelComponent

	// selectRestaurant(e) {
	// 	e.preventDefault()
	// 	let chosenRestaurantTitle = e.target.name
	// 	let newRestaurantTitleSelected = this.state.restaurantsTitleSelected.slice()
	// 	newRestaurantTitleSelected.push(chosenRestaurantTitle)
	// 	this.setState({restaurantsTitleSelected : chosenRestaurantTitle})
	// },


	