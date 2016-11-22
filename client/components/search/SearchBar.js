import React from 'react'

const SearchBar = (props) => {
	return (
		<div className="searchBar col-sm-4">
			<input type="search" className="form-control" placeholder="Enter item name" type="text" onChange={props.handleSearch} value={props.val} />
		</div>
	)
}

SearchBar.propTypes = {
	handleSearch : React.PropTypes.func.isRequired,
	val : React.PropTypes.string
}

export default SearchBar