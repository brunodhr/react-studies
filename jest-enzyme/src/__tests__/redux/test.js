import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'
import { ReduxCounter } from 'components/Counter'
import { counterReducer } from 'store/reducers/counter'

const getWrapper = ({ count }) =>
  mount(
    <Provider store={createStore(counterReducer, { count })}>
      <ReduxCounter />
    </Provider>
  )

it('renders initial count', () => {
  const wrapper = getWrapper()

  expect(wrapper.text()).toMatch(/clicked 0 times/i)
})

it('renders initial count', () => {
  const wrapper = getWrapper({ count: 10 })

  expect(wrapper.text()).toMatch(/clicked 10 times/i)
})

it('increments count', () => {
  const wrapper = getWrapper({ count: 5 })

  wrapper.find('button').simulate('click')
  expect(wrapper.text()).toMatch(/clicked 6 times/i)
})
