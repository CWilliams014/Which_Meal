import React from 'react'
import Dropdown from '../DropdownMenu'
import SelectedRestaurant from '../SelectedRestaurant'
import MenuDisplay from '.././menu/MenuDisplay'
import Table from '.././compare/Table'

class MealContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	what: ''
        }
    }
    render() {
        return 
        	<div className="MealContainer">
        	<Table meals={this.props.data} />
        	</div>;
    }
}

export default MealContainer;


  				// 	<Dropdown selectRestaurant={this.selectRestaurant}
						// 				  restaurantSelected={this.state.restaurantSelected}
						// 					restaurantTitles={allRestaurantTitles}	/>

						// <SelectedRestaurant restaurant={this.state.restaurantSelected} />
						
						// <MenuDisplay selectMeal={this.selectMeal} 
						// 						 menu={this.props.menuSelected} />