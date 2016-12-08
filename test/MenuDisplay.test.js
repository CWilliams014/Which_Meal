import React from 'react'
import MenuDisplay from '.././client/components/menu/MenuDisplay'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import ReactDOM from 'react-dom'
const { shallow, mount, render } = require('enzyme');

const renderIn = TestUtils.renderIntoDocument

const t = TestUtils

describe('test test 12 12 />', () => {
	it('should pass test', () => {
		expect(1 + 1).toBe(2);
	})
})

describe('MenuDisplay />', () => {
	it('should exist', () => {
		expect(MenuDisplay).toExist()
	})
})

