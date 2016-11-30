import React from 'react'

const SelectedRestaurant = (props) => {
	return (
		<div className="col-xs-12 text-center selected-restaurant">
			<span className="h3 rest-name">{props.restToDisplay}</span>
		</div>
	)
}

SelectedRestaurant.propTypes = {
	restToDisplay: React.PropTypes.string.isRequired
}

export default SelectedRestaurant