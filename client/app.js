import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import HeaderNavBar from './components/header/HeaderNavBar'
import TopLevelComponent from './components/TopLevelComponent'
import About from './components/about/About'

class App extends Component {
	render() {
		return (
			<Router>
				<div>
					<ul>
					<li><Link to="/about">About</Link></li>				
				</ul>
					
					<Match exactly pattern="/" component={TopLevelComponent} />
					<Match pattern="/about" component={About} />
				</div>
			</Router>
		);
	}
}

export default App