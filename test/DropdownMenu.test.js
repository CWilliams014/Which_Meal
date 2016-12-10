import React from 'react'
import Dropdown from '.././client/components/DropdownMenu'
import { DropdownButton, MenuItem }  from 'react-bootstrap/lib'
import { expect } from 'chai'
import { shallow, mount } from 'enzyme';
import allRestaurantTitles from '.././data/fastFoodNutritionRestaurantNames'
// import sinon from 'sinon'


describe('Dropdown />', () => {
	const restaurantTitles = allRestaurantTitles
	const len = restaurantTitles.length 

	it('should render DropdownButton Component', () => {
		const wrapper = shallow(<Dropdown restaurantTitles={restaurantTitles}/>)
		expect(wrapper.find(DropdownButton)).to.have.length(1)
	})
	it('should render correct amount of MenuItems from DropdownButton', () => {
		const wrapper = shallow(<Dropdown restaurantTitles={restaurantTitles}/>)
		expect(wrapper.find(MenuItem)).to.have.length(len)
	})
})


	// it('should call selectRestaurant() onClick', () => {
	// 	const buttonClick = sinon.spy()
	// 	const wrapper = mount(<Dropdown restaurantTitles={restaurantTitles} selectRestaurant={buttonClick}/>)
	// 	wrapper.find('button').simulate('click')
	// 	expect(selectRestaurant.calledOnce).to.equal(true)
	// })