import React from 'react'
import { DropdownButton, MenuItem }  from 'react-bootstrap/lib'

//maps over names of restaurants and creates array of MenuItem components(from react-bootstrap)

const Dropdown = (props) => {

	const {restaurantTitles, selectRestaurant} = props

	let names = restaurantTitles.sort().map((element, index) => {
		return <MenuItem onClick={selectRestaurant} name={element} key={index}>{element}</MenuItem>
	})

	return (
		<div className="col-xs-4">
			<DropdownButton  bsSize="large" title="Restaurants" id="bg-nested-dropdown">
				{names}
    	</DropdownButton>
  	</div>
  )
}

Dropdown.propTypes = {
		selectRestaurant : React.PropTypes.func.isRequired,
		restaurantTitles : React.PropTypes.array.isRequired
	}


export default Dropdown