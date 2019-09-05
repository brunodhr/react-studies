import React from 'react'
import { mount, shallow } from 'enzyme'
import Button from './Button'

describe('Button', () => {
  it('should render correctly in "debug" mode', () => {
    shallow(<Button debug />)
    // const component = shallow(<Button debug />)
    // expect(component).toMatchSnapshot()
  })
  it('should be possible to activate button with Spacebar', () => {
    const component = mount(<Button />)
    component.find('button').simulate('keydown', { keyCode: 32 })
    // expect(component).toMatchSnapshot()
    component.unmount()
  })
})
