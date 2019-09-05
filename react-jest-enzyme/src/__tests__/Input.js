import React from 'react'
import Input from 'components/Input'
import { shallow } from 'enzyme'

it('should render correctly in "debug" mode', () => {
  shallow(<Input debug />)
})
it('should display an input', () => {
  const wrapper = shallow(<Input />)
  expect(wrapper.find('input').length).toBe(1)
})
it('should display a label', () => {
  const wrapper = shallow(<Input />)
  expect(wrapper.find('label').length).toBe(1)
})
