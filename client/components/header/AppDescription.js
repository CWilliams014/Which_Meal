import React from 'react'

const AppDescription = (props) => {
	if(!props.showHeader) {
		return (<div></div>)
	}
	return (
		<div className="app-description">
			<p className="app-description 1">Choose a restaurant</p>
			<br></br>
			<p className="app-description 2">Select any number of meals to compare </p>
			<br></br>
			<p className="app-description 3">Click Compare</p>
			<br></br>
		</div>
	)
}


export default AppDescription