import React from 'react'
import { shallow } from 'enzyme'
import Main from 'pages/Main'

describe('Main', () => {
  it('should render correctly in "debug" mode', () => {
    shallow(<Main debug />)
    // const component = shallow(<Main debug />)
    // expect(component).toMatchSnapshot()
  })
})
