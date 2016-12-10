import React from 'react'
import JsonTable from 'react-json-table'
import ClearFields from '.././buttons/ClearFields'
import CalculateComparison from '.././buttons/CalculateComparison'
import ButtonsWrapper from '.././buttons/ButtonsWrapper'
import tableColumns from '../../.././lib/TableColumns'

const MealCompareTable = (props) => {
	console.log('table props', props)
	let meals = props.meals || []
	let calc = props.calc

	const settings = {
		headerClass: function(currentClass, columnKey) {
				return 'table-head'
		},
		rowClass : function() {
			return 'row-centered menu-row'
		},
		cellClass: function(currentClass, columnKey, rowData) {
			if(columnKey === 'menu item') {
				return 'pull-left'
			}
		}
	}

	const columns = tableColumns

return (
	<div className="meal-compare">
		<JsonTable  settings={settings} className="menu-table container" id="menu-compare-table" rows={props.meals} columns={columns} />
			<ButtonsWrapper />
	</div>
 )
}

const r = React.PropTypes 

MealCompareTable.propTypes = {
	meals: r.array,
	calc: r.func.isRequired
}


export default MealCompareTable