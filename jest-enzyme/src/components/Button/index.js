import React from 'react'
import PropTypes from 'prop-types'
// import { Container } from './styles';

const Button = ({ text }) => (
  <>
    <button>{text}</button>
  </>
)

Button.defaultProps = {
  text: 'Default'
}

Button.propTypes = {
  text: PropTypes.string
}

export default Button
