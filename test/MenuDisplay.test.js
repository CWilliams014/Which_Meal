import React from 'react'
import MenuDisplay from '.././client/components/menu/MenuDisplay'
import JsonMenuTable from '.././client/components/menu/JsonMenuTable'
import Loading from '.././client/components/loading/Loading'
import TestUtils from 'react-addons-test-utils'
import { expect } from 'chai'
import  { shallow } from 'enzyme'

describe('MenuDisplay />', () => {
	it('should render <Loading /> if props.loading = true', () => {
		const wrapper = shallow(<MenuDisplay loading={true}/>)
		expect(wrapper.find(Loading)).to.have.length(1)
	})
	it('should render <JsonMenuTable if !props.loading/>', () => {
		const wrapper = shallow(<MenuDisplay />)
		expect(wrapper.find(JsonMenuTable)).to.have.length(1)
	})
})

 