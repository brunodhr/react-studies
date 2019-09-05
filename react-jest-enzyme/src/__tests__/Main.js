import React from 'react'
import { shallow, mount } from 'enzyme'
import Main from 'pages/Main'

describe('Main', () => {
  it('should render correctly in "debug" mode', () => {
    shallow(<Main debug />)
    // const component = shallow(<Main debug />)
    // expect(component).toMatchSnapshot()
  })
  it('should render correctly the infos', () => {
    const username = 'Heisenberg'
    const tasks = ['Task 1', 'Task 2']
    const app = mount(<Main username={username} tasks={tasks} />)

    expect(app.find('p').text()).toEqual('Welcome, Heisenberg!')
    expect(
      app
        .find('li')
        .at(0)
        .text()
    ).toEqual('Task 1')
    expect(
      app
        .find('li')
        .at(1)
        .text()
    ).toEqual('Task 2')
  })
})
