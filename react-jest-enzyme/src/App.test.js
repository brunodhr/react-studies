import React from 'react'
import { shallow, configure } from 'enzyme'
import App from './App'
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    shallow(<App debug />)
    // const component = shallow(<App debug />)
    // expect(component).toMatchSnapshot()
  })
})
