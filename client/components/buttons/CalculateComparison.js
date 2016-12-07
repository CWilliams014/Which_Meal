import React from 'react'


const CalculateComparison = (props) => {
	return (
		<button role="button" id="buttons" className="btn btn-default btn-lg" onClick={props.calc}>Compare! </button>
	)
}
 
CalculateComparison.propTypes = {
	calc : React.PropTypes.func
}

export default CalculateComparison