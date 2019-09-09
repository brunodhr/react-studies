import React from 'react'
import Input from 'components/Input'
import { shallow, mount } from 'enzyme'

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

it('should render with right label', () => {
  const component = mount(<Input label='Label' />)
  expect(component.find('label').text()).toEqual('Label')
})

it('should render default label', () => {
  const component = mount(<Input />)
  expect(component.find('label').text()).toEqual('Default')
})
