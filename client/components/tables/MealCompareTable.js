import React from 'react'
import JsonTable from 'react-json-table'
import ClearFields from '.././buttons/ClearFields'
import CalculateComparison from '.././buttons/CalculateComparison'
import ButtonsWrapper from '.././buttons/ButtonsWrapper'
import tableColumns from '../../.././lib/TableColumns'

const columns = tableColumns

const settings = {
		headerClass: function(currentClass, columnKey) {
				return 'table-head'
		},
		rowClass : function(currentClass, columnKey) {
			console.log('currentClass :', currentClass, 'columnKey :', columnKey)
			return 'row-centered menu-row'
		},
		cellClass: function(currentClass, columnKey, rowData) {
			if(columnKey === 'menu item') {
				return 'pull-left'
			}
		}
	}

class MealCompareTable  extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			color: 'red',
		}
	}

	componentDidMount() {
		console.log(this.node.onClickRow)
	}

	highlight(e, item) {
		this.onClickRow(item)
	}
	sett () {
		return {
			headerClass: function(currentClass, columnKey) {
				return 'table-head'
		},
		rowClass : function(currentClass, columnKey) {
			console.log('currentClass :', currentClass, 'columnKey :', columnKey)
				return 'row-centered menu-row'
		},
		cellClass: function(currentClass, columnKey, rowData) {
			if(columnKey === 'menu item') {
					return 'pull-left'
				}
			}
		}
	}

render() {
	return (
		<div className="meal-compare">
			<JsonTable  settings={settings} ref={node => this.node = node} className="menu-table container" id="menu-compare-table" rows={this.props.meals} columns={columns} />
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