import React from 'react'
import SearchBar from './SearchBar'
import Dropdown from './DropdownMenu'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import Table from './compare/Table'
import CalculateComparison from './buttons/CalculateComparison'
import Calculate from '.././helpers/CalculateMeals'
import axios from 'axios'
import allRestaurantTitles from '../../data/ListOfRestaurantNames'



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
	    };
	},

	selectRestaurant(e) {
		e.preventDefault()
		console.log('select restaurant', e.target.name)
		this.setState({restaurantSelected : e.target.name})

	},

	selectMeal(e, item) {
		e.preventDefault()
		let newMealsToCompare = this.state.mealsToCompare.slice()
		if(newMealsToCompare.indexOf(item) === -1	) { 
			newMealsToCompare.push(item)
			this.setState({mealsToCompare: newMealsToCompare})
			console.log('STATE after row click', this.state)
		}
	},

	compareMeals() {
		console.log('compare meals top level')
		Calculate(this.state.mealsToCompare[0], this.state.mealsToCompare[1])
		
	},

	componentDidMount() {
		return axios.get('/restaurants').then((response) => {
			console.log('RESPONSE', response.data)
			this.setState({allMenus: response.data})
		})
	},

	render() {
		return (
			<div>
				<Dropdown selectRestaurant={this.selectRestaurant}
									restaurantSelected={this.state.restaurantSelected}
									restaurantTitles={allRestaurantTitles}	/>

				<SelectedRestaurant restaurant={this.state.restaurantSelected} />
				<MenuDisplay selectMeal={this.selectMeal} menu={this.state.allMenus} />
				<Table meals={this.state.mealsToCompare} />
				<CalculateComparison Calc={this.compareMeals} />
			</div>
		)
	}
})

export default TopLevelComponent

// <SearchBar restaurantList={this.state.restaurants}/>