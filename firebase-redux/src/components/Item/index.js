import React, { Component } from 'react'
import { connect } from 'react-redux'
import { completeToDo } from 'store/actions'

import { Container, Title, Done } from './styles'
class ListItem extends Component {
  completeClick = completeTodoId => {
    const { completeToDo } = this.props
    completeToDo(completeTodoId)
  }
  render() {
    const { todoId, todo } = this.props
    return (
      <Container>
        <Title>{todo.title}</Title>
        <Done onClick={() => this.completeClick(todoId)}>Done</Done>
      </Container>
    )
  }
}

export default connect(
  null,
  { completeToDo }
)(ListItem)
