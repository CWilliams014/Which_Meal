import React from 'react'
import Dropdown from './DropdownMenu'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import Table from './compare/Table'

class MealWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	what: ''
        }
    }
    render() {
      console.log('meal wrapper', this.props)
        return (
        	<div>
              <Dropdown selectRestaurant={this.props.selectRestaurant}
                        restaurantSelected={this.props.restaurantSelected}
                        restaurantTitles={this.props.restaurantTitles} />

              <SelectedRestaurant restaurant={this.props.restaurant} />

              <MenuDisplay selectMeal={this.props.selectMeal} 
                           menu={this.props.menu} />
        	</div>
        )
    }
}

export default MealWrapper;

                // <Dropdown selectRestaurant={this.props.selectRestaurant}
                //     restaurantSelected={this.props.restaurantSelected}
                //     restaurantTitles={this.props.restaurantTitles} />

                // <SelectedRestaurant restaurant={this.props.restaurant} />

                         //    <MenuDisplay selectMeal={this.props.selectMeal} 
                         // menu={this.props.menu} />
