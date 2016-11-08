//TODO: position restaurant name
  // order menu in efficient way 
  // search bar for menu items

import  React  from 'react'
import Dropdown from './DropdownMenu'
import SelectedRestaurant from './SelectedRestaurant'
import MenuDisplay from './menu/MenuDisplay'
import MealTable from './tables/MealTable'
import axios from 'axios'
import Loading from 'react-loading'
import SearchBar from './search/SearchBar'
// div window component which holds restauranted choice and correct menu
// needs to be refactored using spread operator

class MealWrapper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        	selectedRestaurant: '',
          currentMenu: [],
          searchTerm: '',
          sort: false,
          loading: false,
        }
        this.selectRestaurant = this.selectRestaurant.bind(this)
        this.getRestaurantData = this.getRestaurantData.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
    }
    
  selectRestaurant(e) {
    let chosen = e.target.name
    this.setState({selectedRestaurant : chosen})
    this.getRestaurantData(chosen)
  }

  handleSearch(e) {
    console.log('handleSearchh', e.target.value)
    this.setState({searchTerm: e.target.value })
  }

  getRestaurantData(name) {
    this.setState({loading: true})
    let _name = name
    return axios.get('/restaurants', {params: { id: _name}}).then((response) => {
      this.setState({loading: false})
      let data = response.data
      console.log('getrest data', data)
      let splicedData = data.splice(0,1)
      this.setState({currentMenu: response.data})
    })
  }
  
  render() {
    const _this = this;
    var menu;
    var newMenu = []
    this.state.currentMenu.filter(function(item, index) {
      let currItem = item.itemName.toLowerCase()
      let currSearch = _this.state.searchTerm.toLowerCase()
        
      if(currItem.includes(currSearch)) {
        newMenu.push(item)
      }
    }) 
  return (
      <div className="meal-container">
        <Dropdown selectRestaurant={this.selectRestaurant}
                  restaurantTitles={this.props.restaurantTitles} />
                       
        <SearchBar handleSearch={this.handleSearch} 
                   val={this.state.searchTerm} />
        <SelectedRestaurant restToDisplay={this.state.selectedRestaurant} />

        <MenuDisplay selectMeal={this.props.selectMeal} 
                     sortColumn={this.sortColumn}
                     handleSearch={this.handleSearch}
                     searchTerm={this.state.searctTerm}
                     menu={newMenu} />
      </div>
    )
  }
}

const r = React.PropTypes

MealWrapper.proptypes = {
  restaurantTitles : r.array,
  selectMeal : r.func.isRequired
}


export default MealWrapper;

    // const _this = this
    // const menu = function() {
    //   return this.state.currentMenu.filter(function(item, index) {
    //     console.log('item', item.itemName.toLowerCase())
    //     console.log('stolower', _this.state.searchTerm.toLowerCase())
    //     return item.itemName.toLowerCase().indexOf(_this.state.searchTerm.toLowerCase() >= 0)
    //   }) || [] }


