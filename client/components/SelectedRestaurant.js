import React from 'react'

const SelectedRestaurant = (props) => {
	return (
		<div className="navbar-text">
			{props.restToDisplay}
		</div>
	)
}

SelectedRestaurant.propTypes = {
	restToDisplay: React.PropTypes.string.isRequired
}

export default SelectedRestaurant