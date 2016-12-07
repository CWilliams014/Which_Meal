import React from 'react'
import WelcomeTitle from './WelcomeTitle'
import AppDescription from './AppDescription'

const Header = (props) => {
	let appDescript;
	if(props.showHeader) {
		appDescript = <AppDescription />
	} else {
		appDescript = <div></div>
	}
	return (
	<div className="header-wrapper container text-center">
		<WelcomeTitle />

		{appDescript}
	</div>
	)
}


export default Header