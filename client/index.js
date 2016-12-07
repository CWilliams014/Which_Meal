import React from 'react';
import { render } from 'react-dom'
import TopLevelComponent from './components/TopLevelComponent'
import '../Public/stylesheet.scss'
import '../Public/header.scss'
import '../Public/AppDescription.scss'
import '../Public/mealContainer.scss'
import '../Public/menuTable.css'
import '../Public/buttons.scss'
import '../Public/searchBar.scss'
import '../Public/menuNav.scss'
import '../Public/selectedRestaurant.scss'
import '../Public/MealCompareTable.scss'
import '../Public/loading.scss'

render(<TopLevelComponent />, document.getElementById('app'))

