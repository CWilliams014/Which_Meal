import React from 'react'


const ClearFields = (props) => {
	const { clear } = props
	return (
		<button role="button" id="buttons" className="btn btn-default btn-lg" onClick={clear}>Clear</button>
	)
}

ClearFields.propTypes = {
	clear : React.PropTypes.func.isRequired
}

export default ClearFields