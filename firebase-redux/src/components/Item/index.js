import React from 'react'
import { useDispatch } from 'react-redux'
import { complete } from 'store/thunks/todos'

import { Container, Title, Done } from './styles'

const ListItem = ({ todoId, todo }) => {
  const dispatch = useDispatch()

  function completeClick() {
    dispatch(complete(todoId))
  }

  return (
    <Container>
      <Title>{todo.title}</Title>
      <Done onClick={completeClick}>Done</Done>
    </Container>
  )
}

export default ListItem
