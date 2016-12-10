import React from 'react'


const CalculateComparison = (props) => {
	const { compare } = props
	return (
		<button role="button" id="buttons" className="btn btn-default btn-lg" onClick={compare}>Compare! </button>
	)
}
 
CalculateComparison.propTypes = {
	compare : React.PropTypes.func.isRequired
}

export default CalculateComparison