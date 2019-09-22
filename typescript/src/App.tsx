import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import GlobalStyle from './styles'

import Layout from 'components/Layout'

import Home from 'pages/Home'
import Details from 'pages/Details'

const App: React.FC = () => (
  <Layout>
    <GlobalStyle />
    <Router>
      <Route path='/' exact component={Home} />
      <Route path='/product/:id' component={Details} />
    </Router>
  </Layout>
)

export default App
