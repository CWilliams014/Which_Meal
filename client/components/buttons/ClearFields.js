import React from 'react'


const ClearFields = (props) => {
	return (
		<button className="clear-fields-button" onClick={props.clearMeals}>Clear Fields</button>
	)
}

ClearFields.propTypes = {
	clearMeals : React.PropTypes.func
}

export default ClearFields