import React from 'react'
import { shallow, configure } from 'enzyme'
import Main from './Main'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('Main', () => {
  it('should render correctly in "debug" mode', () => {
    shallow(<Main debug />)
    // const component = shallow(<Main debug />)
    // expect(component).toMatchSnapshot()
  })
})
