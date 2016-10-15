import React from 'react'
import createFragment from 'react-addons-create-fragment';
import JsonTable from 'react-json-table'
import ClearFields from '.././buttons/ClearFields'
import CalculateComparison from '.././buttons/CalculateComparison'

const Table = ({props}) => {
	console.log('table props', this.props)
	let columns = [
		{key: 'menu item', label: 'Entree'},
		{key: 'calories', label: 'Calories'} , 
		{key: 'protein', label: 'Protein'} , 
		{key:'carbohydrates', label: 'Carbohydrates'}, 
		{key: 'fiber', label: 'Fiber'},
		{key: 'sugars', label: 'Sugar'}, 
		{key: 'sat fat', label: 'Saturated Fat'}, 
		{key:'trans fat', label: 'Trans Fat'}, 
		{key: 'sodium', label: 'Sodium'}
	]

	return (
		<div>
			<JsonTable  rows={props.meals} columns={columns} />
			<CalculateComparison calc={props.calc} />
			<ClearFields clearMeals={props.clearMeals} />
		</div>
		)
	}





export default Table