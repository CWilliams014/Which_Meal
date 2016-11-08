import React from 'react'
import JsonMenuTable from './JsonMenuTable'
import MealTable from '../tables/MealTable'
import  Loading  from 'react-loading'
import LoadSpinner from '../Spinner'
const sty = require('../../../Public/loader.css')
// import Entree from './Entrees'
console.log('sty', sty)
//loop through menu object - sort and append data to proper position on table 
const style = {
  color: '#ffffff',
  fontSize: '20',
  margin: 100,
  width: 1,
  height: 1,
  borderRadius: 50
}

const MenuDisplay = React.createClass({



	render() {
		const menu = this.props.menu 
		let util;

		if(this.props.loading === true) {
			console.log('props.loading if 1', this.props.loading)
			util = <div className="big">Loading...</div>
		}
			else {
				console.log('else util', util)
				util = <JsonMenuTable menu={this.props.menu} selectMeal={this.props.selectMeal}/>
			}

		return (
			<div className="menu-display">
				{util}
			</div>
		)
	}
})

const r = React.PropTypes

MenuDisplay.propTypes = {
	handleSearch: r.func.isRequired,
	loading: r.bool,
	menu: r.array,
	searchTerm : r.string,
	selectMeal : r.func.isRequired,
}



export default MenuDisplay
