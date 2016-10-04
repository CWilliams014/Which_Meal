import React from 'react'
import Restaurant from './Restaurant'


const SearchBar = React.createClass({
    getInitialState() {
        return {
            searchTerm: '',
            list: []  
        };
    },

    componentWillReceiveProps(nextProps) {
    	console.log('nextprops', nextProps)
    	console.log('this.props', this.props)
      if(this.props != nextProps) {
      	this.setState({list: nextProps})
      	console.log('search state', this.state)
      }
    },

    handleSearch(e) {
    	this.setState({searchTerm: e.target.value})

    },
    render() {
    	let places = []
    	for(let value in this.state.list) {
    		places.push(<Restaurant key={value} title={this.state.list[value]} />)
    	}
        return (
        	<div>
        	<input onChange={this.handleSearch} value={this.state.searchTerm} type="text" ref="search-input" placeholder="Enter Restaurant Name" />
        	<div>
        	{places}
        	</div>
        	</div>
        )
    }
})

export default SearchBar;


