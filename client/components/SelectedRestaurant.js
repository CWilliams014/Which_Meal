import React from 'react'

const SelectedRestaurant = (props) => {
	return (
		<div className="col-xs-4">
			{props.restToDisplay}
		</div>
	)
}

SelectedRestaurant.propTypes = {
	restToDisplay: React.PropTypes.string.isRequired
}

export default SelectedRestaurant