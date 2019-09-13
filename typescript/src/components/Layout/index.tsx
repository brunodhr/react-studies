import React from 'react'

import Menu from 'components/Menu'
import Footer from 'components/Footer'

import { Wrapper, Body } from './styles'

const Layout: React.FC = ({ children }) => (
  <Wrapper>
    <Menu />
    <Body>{children}</Body>
    <Footer />
  </Wrapper>
)

export default Layout
