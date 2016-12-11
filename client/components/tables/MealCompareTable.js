import React from 'react'
import JsonTable from 'react-json-table'
import ClearFields from '.././buttons/ClearFields'
import CalculateComparison from '.././buttons/CalculateComparison'
import ButtonsWrapper from '.././buttons/ButtonsWrapper'
import tableColumns from '../../.././lib/TableColumns'

const columns = tableColumns

class MealCompareTable  extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			class: 'winner',
		}
	}

	settings () {
		const _this = this
		return {
			headerClass: function(currentClass, columnKey) {
				return 'table-head'
		},
		rowClass : function(currentClass, columnKey) {
			if(columnKey.itemName === _this.props.winner.itemName) {
				console.log('column key', columnKey)
				console.log('props.winner', _this.props.winner.itemName)
				return 'winner'
			} else {
			
				return 'row-centered menu-row'
			}
		},
		cellClass: function(currentClass, columnKey, rowData) {
			if(columnKey === 'menu item') {
					return 'pull-left'
				}
			}
		}
	}

render() {
	const w = JSON.stringify(this.props.winner)
	return (
		<div className="meal-compare">
			<JsonTable  settings={this.settings()} ref={node => this.node = node} className="menu-table container" id="menu-compare-table" rows={this.props.meals} columns={columns} />
			<ButtonsWrapper compare={this.props.compare} clear={this.props.clear} />
		</div>
	 )
	}
}

const r = React.PropTypes 

MealCompareTable.propTypes = {
	meals: r.array.isRequired,
	compare: r.func.isRequired,
	clear: r.func.isRequired
}


export default MealCompareTable


	
	//  settings = {
	// 	headerClass: function(currentClass, columnKey) {
	// 			return 'table-head'
	// 	},
	// 	rowClass : function() {
	// 		return 'row-centered menu-row'
	// 	},
	// 	cellClass: function(currentClass, columnKey, rowData) {
	// 		if(columnKey === 'menu item') {
	// 			return 'pull-left'
	// 		}
	// 	}
	// }