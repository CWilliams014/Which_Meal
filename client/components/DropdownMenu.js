import React from 'react'
import { DropdownButton, MenuItem }  from 'react-bootstrap/lib'

//maps over names of restaurants and creates array of MenuItem components(from react-bootstrap)

const Dropdown = React.createClass({
	render() {
		console.log('PROPS', this.props)
		const props = this.props.restaurantTitles
		
		let names = props.sort().map((element, index) => {
			return <MenuItem onClick={this.props.selectRestaurant} name={element} key={index}>{element}</MenuItem>
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