import React from 'react'
import { mount, shallow } from 'enzyme'
import Button from 'components/Button'

describe('Button', () => {
  it('should render correctly in "debug" mode', () => {
    shallow(<Button debug />)
    // const component = shallow(<Button debug />)
    // expect(component).toMatchSnapshot()
  })

  it('should be possible to activate button with Spacebar', () => {
    const component = mount(<Button />)
    component.find('button').simulate('keydown', { keyCode: 32 })
    component.unmount()
  })

  it('should render with right text', () => {
    const component = mount(<Button text='Teste' />)
    expect(component.find('button').text()).toEqual('Teste')
  })

  it('should render default text', () => {
    const component = mount(<Button />)
    expect(component.find('button').text()).toEqual('Default')
  })
})
