import React from 'react'
import JsonMenuTable from './JsonMenuTable'
import MealTable from '../tables/MealTable'
import  Loading  from 'react-loading'
import LoadSpinner from '../Spinner'

//loop through menu object - sort and append data to proper position on table 

const MenuDisplay = (props) => {

	const {menu, selectMeal} = props
	let util;

	if(props.loading === true) {
		util = <div className="big">Loading...</div>
	}
		else {
			util = <JsonMenuTable menu={menu} selectMeal={selectMeal}/>
		}

	return (
		<div className="table menu-display">
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
