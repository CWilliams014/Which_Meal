import React from 'react'
import { DropdownButton, MenuItem }  from 'react-bootstrap/lib'

//maps over names of restaurants and creates array of MenuItem components(from react-bootstrap)

const Dropdown = React.createClass({
	propTypes : {
		selectRestaurant : React.PropTypes.func,
		restaurantTitles : React.PropTypes.array
	},

	render() {
		const {restaurantTitles, selectRestaurant} = this.props
		
		let names = restaurantTitles.sort().map((element, index) => {
			return <MenuItem onClick={selectRestaurant} name={element} key={index}>{element}</MenuItem>
		})

		return (
			<div>
					<DropdownButton  title="Dropdown" id="bg-nested-dropdown">
						{names}
		    	</DropdownButton>
    	</div>
    )
	}
})



export default Dropdown