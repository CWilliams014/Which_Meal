import React from 'react';
import { render } from 'react-dom'
import TopLevelComponent from './components/TopLevelComponent'
import '../Public/stylesheet.scss'

render(<TopLevelComponent />, document.getElementById('app'))