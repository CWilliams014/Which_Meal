import React from 'react'
import createFragment from 'react-addons-create-fragment';
import JsonTable from 'react-json-table'
import ClearFields from '.././buttons/ClearFields'
import CalculateComparison from '.././buttons/CalculateComparison'

const Table = React.createClass({
	getInitialState() {
	    return {
	          meals: []
	    };
	},

	componentWillReceiveProps(nextProps) {
	    if(nextProps != this.props) {
	    	this.setState({meals: this.props.meal1})
	    console.log('new table props', this.props)
	    }  
	},
	render() {
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
		return(
			<div>
				<JsonTable  rows={this.props.meals} columns={columns} />
				<CalculateComparison calc={this.props.calc} />
				<ClearFields clearMeals={this.props.clearMeals} />
			</div>
		)
	}
})




export default Table