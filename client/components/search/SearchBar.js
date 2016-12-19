import React from 'react'
import Sticky from 'react-stickynode'

const SearchBar = (props) => {
	return (
		<div className="searchBar col-xs-4 col-xs-offset-4">

				<input className="pull-right" type="search" placeholder="Search in menu..." type="text" onChange={props.handleSearch} value={props.val} />
		</div>
	)
}

SearchBar.propTypes = {
	handleSearch : React.PropTypes.func.isRequired,
	val : React.PropTypes.string
}

export default SearchBar