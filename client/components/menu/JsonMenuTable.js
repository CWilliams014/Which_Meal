import React from 'react'
import JsonTable from 'react-json-table'
import tableColumns from '../../.././lib/TableColumns'
import Sticky from 'react-stickynode'


const JsonMenuTable = (props) => {
	const {menu, selectMeal } = props
	const columns = tableColumns
	console.log('jsonmenutalbe', menu)
	const settings = {
		headerClass: function(currentClass, columnKey) {
		if(columnKey === 'menu item') {
			return 'table-head'
		} else {
				return 'table-head'
		}
		},
		rowClass: function() {
			return 'row-centered menu-row'
		},
		cellClass: function(currentClass, columnKey, rowData) {
			if(columnKey === 'menu item') {
				return 'pull-left'
			}
		},
		noRowsMessage: 'Choose a restaurant!'
	}

	return (
		<div className="menu-display">
			<div className="main-json-table">
				<JsonTable className="menu-table container text-center" 
									 rows={menu}
									 settings={settings}
									 onClickRow={selectMeal}
									 columns={columns} />	
			</div>			 
		</div>
	)
}

const r = React.PropTypes

JsonMenuTable.propTypes = {
	menu : r.array,
	selectMeal : r.func.isRequired
}


export default JsonMenuTable;