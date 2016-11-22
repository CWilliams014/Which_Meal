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
import MenuNav from './navbar/MenuNav'
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
  const chosen = e.target.name
  this.setState({loading: true, selectedRestaurant : chosen})
  const allRests = this.props.restaurantsSelected
  
  if(allRests.hasOwnProperty(chosen)) {
    this.setState({currentMenu : allRests[chosen], loading: false})
    console.log('found', this.state.currentMenu)
  }
    else {
      this.getRestaurantData(chosen)
  }
}

handleSearch(e) {
  this.setState({searchTerm: e.target.value })
}

getRestaurantData(name) {
  console.log('not found', name)
  this.setState({loading: true})
  let restObj = {}
  let _name = name
  return axios.get('/restaurants', {params: { id: _name}}).then((response) => {
    let data = response.data
    restObj[_name] = data
    let splicedData = data.splice(0,1)
    this.props.addSelectedRestaurant(restObj)
    this.setState({currentMenu: response.data, loading: false})
    console.log('state after axio.get', this.state)
  })
}

render() {
  const _this = this;
  var menu;
  var newMenu = []
  console.log('this.state.currentMenu', this.state.currentMenu)
  this.state.currentMenu.filter(function(item, index) {
    let currItem = item.itemName.toLowerCase()
    let currSearch = _this.state.searchTerm.toLowerCase()
      
    if(currItem.includes(currSearch)) {
      newMenu.push(item)
    }
  }) 
  return (
      <div className="meal-container">
        <div>
          <MenuNav  selectRestaurant={this.selectRestaurant}
                    restaurantTitles={this.props.restaurantTitles} 
                    selectedRestaurant={this.state.selectedRestaurant}          
                    handleSearch={this.handleSearch} 
                    searchTerm={this.state.searchTerm} />
        </div>

          <MenuDisplay selectMeal={this.props.selectMeal} 
                       sortColumn={this.sortColumn}
                       handleSearch={this.handleSearch}
                       searchTerm={this.state.searctTerm}
                       loading={this.state.loading}
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


