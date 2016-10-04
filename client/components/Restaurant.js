import React from 'react'

const Restaurant = (props) => {
	console.log('restaurant props', props)

	let displayTitles = []

	props.title.map((place, i) => {
		displayTitles.push(<div className="Restaurant-titles" key={i}>{place}</div>)
	})
	return (
		<div>
		{displayTitles}
		</div>
	)
}

export default Restaurant