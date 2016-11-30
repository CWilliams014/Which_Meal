import React from 'react';
import { render } from 'react-dom'
import TopLevelComponent from './components/TopLevelComponent'
import '../Public/stylesheet.scss'
import '../Public/header.scss'
import '../Public/AppDescription.scss'
import '../Public/mealContainer.scss'
import '../Public/menuTable.css'
import '../Public/dropdown.scss'
import '../Public/searchBar.scss'
import '../Public/menuNav.scss'
import '../Public/selectedRestaurant.scss'

render(<TopLevelComponent />, document.getElementById('app'))