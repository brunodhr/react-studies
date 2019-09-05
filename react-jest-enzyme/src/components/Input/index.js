import React from 'react'
import PropTypes from 'prop-types'
// import { Container } from './styles';

const Input = ({ label }) => (
  <>
    <label>{label}</label>
    <input type='text' />
  </>
)

Input.defaultProps = {
  label: 'Default'
}
Input.propTypes = {
  label: PropTypes.string
}

export default Input
