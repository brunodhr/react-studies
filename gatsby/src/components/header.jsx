import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, NavbarBrand } from 'shards-react'

import StyledLink from './styled-link'

const Header = ({ siteTitle }) => (
  <Navbar type="dark" theme="primary">
    <NavbarBrand tag="div">
      <StyledLink to="/">{siteTitle}</StyledLink>
    </NavbarBrand>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
