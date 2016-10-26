import React from 'react'
import Dropdown from './DropdownMenu'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import Table from './compare/Table'
import axios from 'axios'
// div window component which holds restauranted choice and correct menu
// needs to be refactored using spread operator

class MealWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	selectedRestaurant: '',
          currentMenu: '',
          sort: false,
        }
        this.selectRestaurant = this.selectRestaurant.bind(this)
        this.getRestaurantData = this.getRestaurantData.bind(this)
    }
    selectRestaurant(e) {
      let chosen = e.target.name
      this.setState({selectedRestaurant : chosen})
      this.getRestaurantData(chosen)
    }
    getRestaurantData(name) {
      let _name = name
      return axios.get('/restaurants', {params: { id: _name}}).then((response) => {
        let data = response.data
        console.log('getrest data', data)
        let splicedData = data.splice(0,1)
      this.setState({currentMenu: response.data})
      })
    }
    render() {
        return (
        	<div className="meal-container">
              <Dropdown selectRestaurant={this.selectRestaurant}
                        restaurantSelected={this.props.restaurantSelected}
                        restaurantTitles={this.props.restaurantTitles} />

              <SelectedRestaurant restToDisplay={this.state.selectedRestaurant} />

              <MenuDisplay selectMeal={this.props.selectMeal} 
                           sortColumn={this.sortColumn}
                           menu={this.state.currentMenu} />
        	</div>
        )
    }
}

export default MealWrapper;
