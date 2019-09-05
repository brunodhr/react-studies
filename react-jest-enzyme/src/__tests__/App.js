import React from 'react'
import ReactDOM from 'react-dom'

import { shallow, mount } from 'enzyme'
import App from 'App'
import Main from 'pages/Main'

describe('App', () => {
  it('should render correctly in "debug" mode', () => {
    shallow(<App debug />)
    // const component = shallow(<App debug />)
    // expect(component).toMatchSnapshot()
  })
  it('should render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })

  it('should render main page for non logged users', () => {
    const props = {
      isLoggedIn: false,
      username: null
    }
    const app = mount(<App {...props} />)

    expect(app.find(Main)).toHaveLength(0)
    expect(
      app
        .find('p')
        .at(0)
        .text()
    ).toEqual('Hello, visitor. Sign in to continue.')
  })

  it('should render main page for logged user', () => {
    const props = {
      logged: true,
      username: 'Heisenberg'
    }
    const app = mount(<App {...props} />)

    expect(app.find(Main)).toHaveLength(1)
    expect(
      app
        .find('p')
        .at(0)
        .text()
    ).toEqual('Welcome, Heisenberg!')

    expect(app.find('li')).toHaveLength(4)
    expect(
      app
        .find('li')
        .at(0)
        .text()
    ).toEqual('8am - Chemistry classes at school')
    expect(
      app
        .find('li')
        .at(1)
        .text()
    ).toEqual('12:30pm - Meet Jesse for lunch')
    expect(
      app
        .find('li')
        .at(2)
        .text()
    ).toEqual('15pm - Meet Gus at the Pollos Hermanos')
    expect(
      app
        .find('li')
        .at(3)
        .text()
    ).toEqual('20pm - Dinner by the pool with Hank and Marie')
  })
})
