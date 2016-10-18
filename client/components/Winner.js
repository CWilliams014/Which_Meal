import React from 'react'

const Winner = (props) => {
	const w = JSON.stringify(props.winningMeal)
	return (
		<div>
		{w}
		</div>
	)
}


export default Winner