import React from 'react'
import SearchBar from './SearchBar'
import axios from 'axios'


const TopLevelComponent = React.createClass({
	getInitialState() {
	    return {
	        restaurants: []  
	    };
	},
	componentDidMount() {
    return axios.get('/restaurants').then((response)=> {
    	this.setState({restaurants: response.data})
    	console.log('response', response)
    	console.log('Top Level STATE', this.state)
    }).catch((error) => {
    	console.log('error on componentDidMount request', error)
    })
	},

	render() {
		return (
			<div>
			<SearchBar restaurantList={this.state.restaurants}/>
			</div>
		)
	}
})

export default TopLevelComponent

// <SearchBar restaurantList={this.state.restaurants}/>