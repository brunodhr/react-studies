import React from 'react'
import PropTypes from 'prop-types'

const Main = ({ username, tasks }) => (
  <>
    <p>Welcome, {username}!</p>
    <ul>{tasks && tasks.map((task, index) => <li key={index}>{task}</li>)}</ul>
  </>
)

Main.propTypes = {
  username: PropTypes.string,
  tasks: PropTypes.array
}

export default Main
