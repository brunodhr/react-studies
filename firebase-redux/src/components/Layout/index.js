import React from 'react'

import Menu from 'components/Menu'

import { Container } from './styles'

const Layout = ({ children }) => (
  <>
    <Menu />
    <Container>{children}</Container>
  </>
)

export default Layout
