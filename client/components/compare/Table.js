import React from 'react'
import createFragment from 'react-addons-create-fragment';
import JsonTable from 'react-json-table'
import ClearFields from '.././buttons/ClearFields'
import CalculateComparison from '.././buttons/CalculateComparison'

const Table = React.createClass({
	getInitialState() {
	    return {
	          show: false
	    };
	},

	componentWillReceiveProps(nextProps) {
	    if(nextProps.meals != this.props.meals) {
	    	this.setState({show: true})
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
		let showTableData;
		if(this.state.show) {
			showTableData = 
				<div>
					<JsonTable  rows={this.props.meals} columns={columns} />
					<CalculateComparison calc={this.props.calc} />
					<ClearFields clearMeals={this.props.clearMeals} />
				</div>
			}
		return(
			<div>
				{showTableData}
			</div>
		)
	}
})




export default Table