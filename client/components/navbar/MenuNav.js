import React from 'react'
import SearchBar from '../search/SearchBar'
import Dropdown from '../DropdownMenu'
import SelectedRestaurant from '../SelectedRestaurant'
import Dummy from './dummyNav'

const MenuNav = (props) => {
	const {selectRestaurant, restaurantTitles, selectedRestaurant, handleSearch, searchTerm} = props
		
	return (    
		<div className="row">
     
			<Dropdown selectRestaurant={selectRestaurant}
	              restaurantTitles={restaurantTitles} />

	    <SelectedRestaurant restToDisplay={selectedRestaurant} />           
	    
	    <SearchBar handleSearch={handleSearch} 
	               val={searchTerm} />

	  </div>
  )
}

const r = React.PropTypes

MenuNav.propTypes = {
	selectRestaurant : r.func.isRequired,
	restaurantTitles : r.array.isRequired,
	selectedRestaurant : r.string.isRequired,
	handleSearch : r.func.isRequired,
	searchTerm : r.string.isRequired
}



export default MenuNav