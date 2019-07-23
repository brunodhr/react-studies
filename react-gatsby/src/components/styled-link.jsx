import React from 'react'
import { Link } from 'gatsby'

const StyledLink = props => (
  <Link
    {...props}
    style={{
      color: 'inherit',
      textDecoration: 'inherit',
    }}
  />
)

export default StyledLink
