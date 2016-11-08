import React from 'react'


const CalculateComparison = (props) => {
	return (
		<button onClick={props.calc}>COMPARE</button>
	)
}
 
CalculateComparison.propTypes = {
	calc : React.PropTypes.func
}

export default CalculateComparison