import React from 'react'
import JsonTable from 'react-json-table'

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
		const meals = this.state.meal1
		console.log('MEALS', meals)
		const rowData = [{'calories': 100}]
		console.log('table props', this.props)
		let columns = [
			{key: 'menu item', label: 'Entree'},
			{key: 'calories', label: 'Calories'} , 
			{key: 'protein', label: 'Protein'} , 
			{key:'carbohydrates', label: 'Carbohydrates'}, 
			{key: 'sugars', label: 'Sugar'}, 
			{key: 'sat fat', label: 'Saturated Fat'}, 
			{key:'trans fat', label: 'Trans Fat'}, 
			{key: 'sodium', label: 'Sodium'}
		]
		return(
			<div>
			<JsonTable  rows={this.props.meals} columns={columns} />

			</div>
		)
	}
})




export default Table