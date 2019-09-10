import React from 'react'
import GlobalStyle from './styles'

import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import reducers from 'store/reducers'
import App from './App'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactDOM.render(
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>,
  document.getElementById('root')
)
