import React from 'react'
import { shallow, mount } from 'enzyme'
import Main from 'pages/Main'

describe('Main', () => {
  it('should render correctly in "debug" mode', () => {
    shallow(<Main debug />)
    // const component = shallow(<Main debug />)
    // expect(component).toMatchSnapshot()
  })

  it('should render page with tasks', () => {
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

  it('should render page without tasks', () => {
    const username = 'Heisenberg'
    const tasks = []
    const app = mount(<Main username={username} tasks={tasks} />)

    expect(app.find('p').text()).toEqual('Welcome, Heisenberg!')
    expect(app.find('li')).toHaveLength(0)
  })
})
