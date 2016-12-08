import React from 'react'
import JsonMenuTable from './JsonMenuTable'
import Loading from '.././loading/Loading'

//loop through menu object - sort and append data to proper position on table 

const MenuDisplay = (props) => {
	const {menu, selectMeal, loading} = props
	let util;

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
	handleSearch: r.func.isRequired,
	loading: r.bool,
	menu: r.array,
	searchTerm : r.string,
	selectMeal : r.func.isRequired,
}



export default MenuDisplay
