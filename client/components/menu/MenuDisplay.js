import React from 'react'
import JsonMenuTable from './JsonMenuTable'
import Loading from '.././loading/Loading'

//loop through menu object - sort and append data to proper position on table 

const MenuDisplay = (props) => {
	const {menu, selectMeal, loading, initialLoad} = props
	let util;

	if(initialLoad) return null

	if(loading === true) {
		util = <Loading />
	}	else {
			util = <JsonMenuTable menu={menu} selectMeal={selectMeal}/>
		}

	return (
		<div className="table menu-display row-fluid">
			{util}
		</div>
	)
}


const r = React.PropTypes

MenuDisplay.propTypes = {
	loading: r.bool,
	menu: r.array.isRequired,
	searchTerm : r.string,
	selectMeal : r.func.isRequired
}



export default MenuDisplay
