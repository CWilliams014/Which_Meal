import React from 'react'
import SearchBar from '../search/SearchBar'
import Dropdown from '../DropdownMenu'
import SelectedRestaurant from '../SelectedRestaurant'

const MenuNav = (props) => {
	const {selectRestaurant, restaurantTitles, selectedRestaurant, handleSearch, searchTerm} = props
		return (    
		<div className="row navbar navbar-default">      
			<Dropdown selectRestaurant={selectRestaurant}
	              restaurantTitles={restaurantTitles} />
	    <SelectedRestaurant restToDisplay={selectedRestaurant} />           
	    <SearchBar handleSearch={handleSearch} 
	               val={searchTerm} />
	  </div>
  )
}



export default MenuNav