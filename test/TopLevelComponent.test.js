import React from 'react'
import TopLevelComponent from '.././client/components/TopLevelComponent'
import MealWrapper from '.././client/components/MealContainer'
import Header from '.././client/components/header/Header'
import MealCompareTable from '.././client/components/tables/MealCompareTable'
import { expect } from 'chai'
import  { shallow, mount } from 'enzyme'

describe('TopLevelComponent />', () => {

	it('should render Header and MealWrapper Components', () => {
		const wrapper = shallow(<TopLevelComponent />)
		expect(wrapper.find(Header)).to.have.length(1)
		expect(wrapper.find(MealWrapper)).to.have.length(1)
	})
	it('should NOT render MealCompareTable when state.showHeader = false', () => {
		const wrapper = mount(<TopLevelComponent />)
		wrapper.state().showHeader = false
		expect(wrapper.find(MealCompareTable)).to.not.be.defined
	})
})


