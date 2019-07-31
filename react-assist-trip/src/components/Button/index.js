import React from 'react'
import PropTypes from 'prop-types'
import { StyledButton } from './styles'

const Button = ({ onClick, content }) => (
  <StyledButton onClick={onClick}>{content}</StyledButton>
)

Button.defaultProps = {
  onClick: () => {},
  content: 'Clique aqui'
}

Button.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.string
}
export default Button
