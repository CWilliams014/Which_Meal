import React from 'react';
import { render } from 'react-dom'
import TopLevelComponent from './components/TopLevelComponent'
import '../Public/stylesheet.scss'
import '../Public/header.scss'
import '../Public/AppDescription.scss'
import '../Public/mealContainer.scss'

render(<TopLevelComponent />, document.getElementById('app'))