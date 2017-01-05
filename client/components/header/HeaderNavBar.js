import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap/lib'
import { BrowserRouter as Router, Link, Match, Miss } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import TopLevelComponent from '../TopLevelComponent'
import About from '.././about/About'

class HeaderNavBar extends Component {
	render() {
		return (
			<div>
				<ul>
					<li><Link to="/about">About</Link></li>
				</ul>

			</div>
		);
	}
}


export default HeaderNavBar




			// <nav className="navbar navbar-default navbar-fixed-top">
			// 	<div className="container-fluid">
			// 		<button>Home</button>
			// 		<button>About</button>
			// 	</div>
			// </nav>


						// 			<LinkContainer to="/">
						// 	<NavItem> Home </NavItem>
						// </LinkContainer>
						// <LinkContainer to="/about">
						// 	<NavItem>About </NavItem>
						// </LinkContainer>

//<Navbar className="fixedTop HeaderNavBar">
	//				<Nav className="Nav">
		//				<Link to="/about">About</Link>
			//		</Nav>
				//</Navbar>
