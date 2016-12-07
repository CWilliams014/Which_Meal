import React from 'react'


const ClearFields = (props) => {
	return (
		<button role="button" id="buttons" className="btn btn-default btn-lg" onClick={props.clearMeals}>Clear</button>
	)
}

ClearFields.propTypes = {
	clearMeals : React.PropTypes.func
}

export default ClearFields