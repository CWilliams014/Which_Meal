import React from 'react'
import Header from '.././client/components/header/Header'
import WelcomeTitle from '.././client/components/header/WelcomeTitle'
import AppDescription from '.././client/components/header/AppDescription'
import { expect } from 'chai'
import { shallow } from 'enzyme';


describe('Header />', () => {
	it('should render WelcomeTitle and AppDescription', () => {
		const wrapper = shallow(<Header />)
		expect(wrapper.find(WelcomeTitle)).to.have.length(1)
		expect(wrapper.find(AppDescription)).to.have.length(1)
	})
})

// expect(wrapper.props().showHeader).to.equal('Show!')	