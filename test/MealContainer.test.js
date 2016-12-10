import React from 'react'
import MealContainer from '.././client/components/MealContainer'
import MenuNav from '.././client/components/navbar/MenuNav'
import MenuDisplay from '.././client/components/menu/MenuDisplay'
import { expect } from 'chai'
import { shallow } from 'enzyme';


describe('MealContainer />', () => {
	it('should render MenuNav and MenuDisplay components', () => {
		const wrapper = shallow(<MealContainer />)
		expect(wrapper.find(MenuDisplay)).to.have.length(1)
		expect(wrapper.find(MenuNav)).to.have.length(1)
	})
	it('should have correct props', () => {
		const wrapper = shallow(<MealContainer />)
		console.log(wrapper.props()) 
	})
})