import React from 'react'

const SearchBar = (props) => {
	return (
		<div className="searchBar col-xs-4">
			<input type="search" placeholder="Search in menu..." type="text" onChange={props.handleSearch} value={props.val} />
		</div>
	)
}

SearchBar.propTypes = {
	handleSearch : React.PropTypes.func.isRequired,
	val : React.PropTypes.string
}

export default SearchBar