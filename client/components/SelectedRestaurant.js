import React from 'react'

const SelectedRestaurant = (props) => {
	return (
		<div className="navbar-text">
			{props.restToDisplay}
		</div>
	)
}

export default SelectedRestaurant