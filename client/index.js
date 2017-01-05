import React from 'react';
import { render } from 'react-dom'
import TopLevelComponent from './components/TopLevelComponent'
import App from './app'
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
import '../Public/_colors.scss'
import '../Public/menuPointer.scss'
import '../Public/HeaderNavBar.scss'
// const purify = require('purify-css')

render(

		<App/>


	, document.getElementById('app'))

