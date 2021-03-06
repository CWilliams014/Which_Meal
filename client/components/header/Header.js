import React from 'react'
import WelcomeTitle from './WelcomeTitle'
import AppDescription from './AppDescription'

const Header = (props) => {
	return (
		<div className="header-wrapper container text-center">
			<WelcomeTitle />
			<AppDescription showHeader={props.showHeader}/>
		</div>
	)
}


export default Header