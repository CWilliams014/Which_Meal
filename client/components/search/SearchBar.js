import React from 'react'

const SearchBar = (props) => {
	return (
		<div>
			<input type="search" type="text" onChange={props.handleSearch} value={props.val} />
		</div>
	)
}

SearchBar.propTypes = {
	handleSearch : React.PropTypes.func.isRequired,
	val : React.PropTypes.string
}

export default SearchBar