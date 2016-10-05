import React from 'react'
import SearchBar from './SearchBar'
import Dropdown from './DropdownMenu'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import axios from 'axios'
import allRestaurantTitles from '../../data/ListOfRestaurantNames'



const TopLevelComponent = React.createClass({
	getInitialState() {
	    return {
	        restaurantTitles: [],
	        restaurantSelected: '',
	        menuDisplayed: '',
	        allMenus: []  
	    };
	},

	selectRestaurant(e) {
		e.preventDefault()
		console.log('select restaurant', e.target.name)
		this.setState({restaurantSelected : e.target.name})

	},

	componentDidMount() {
		return axios.get('/restaurants').then((response) => {
			console.log('RESPONSE', response)
			this.setState({allMenus: response.data[0]})
			console.log('data 0', response.data[0])
		})
	},

	render() {
		return (
			<div>
				<Dropdown selectRestaurant={this.selectRestaurant}
									restaurantSelected={this.state.restaurantSelected}
									restaurantTitles={allRestaurantTitles}	/>

				<SelectedRestaurant restaurant={this.state.restaurantSelected} />
				<MenuDisplay menu={this.state.allMenus} />
			</div>
		)
	}
})

export default TopLevelComponent

// <SearchBar restaurantList={this.state.restaurants}/>