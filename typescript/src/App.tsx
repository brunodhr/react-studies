import React from 'react'
import GlobalStyle from './styles'

import Layout from 'components/Layout'

import Home from 'pages/Home'

const App: React.FC = () => (
  <Layout>
    <GlobalStyle />
    <Home />
  </Layout>
)

export default App
