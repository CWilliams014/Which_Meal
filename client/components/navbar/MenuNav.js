import React from 'react'
import SearchBar from '../search/SearchBar'
import Dropdown from '../DropdownMenu'
import SelectedRestaurant from '../SelectedRestaurant'

const MenuNav = (props) => {
	
	const {selectRestaurant, restaurantTitles, selectedRestaurant, handleSearch, searchTerm, initialLoad} = props
	if(initialLoad) {return null }
	return (
		<div>    
			<div className="row menu-nav">    
				<Dropdown selectRestaurant={selectRestaurant}
		              restaurantTitles={restaurantTitles} />   
		    <SearchBar handleSearch={handleSearch} 
		               val={searchTerm} />
		  </div>
		    <SelectedRestaurant restToDisplay={selectedRestaurant} /> 
		   
	  </div>
  )
}

const r = React.PropTypes

MenuNav.propTypes = {
	selectRestaurant : r.func.isRequired,
	restaurantTitles : r.array.isRequired,
	selectedRestaurant : r.string.isRequired,
	handleSearch : r.func.isRequired,
	searchTerm : r.string.isRequired,
	initialLoad : r.string.isRequired
}



export default MenuNav