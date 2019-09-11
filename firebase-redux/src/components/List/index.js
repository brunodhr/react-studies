import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setTodo, getTodo } from 'store/thunks/todos'

import _ from 'lodash'
import ListItem from 'components/Item'

import { StyledInput, Symbol, Container } from './styles'

const List = () => {
  const todos = useSelector(state => state.data)
  const [formValue, setValue] = useState()
  const [showForm, setShow] = useState()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch])

  const inputChange = event => {
    setValue(event.target.value)
  }

  const formSubmit = event => {
    event.preventDefault()
    dispatch(setTodo({ title: formValue }))
    setValue('')
  }

  return (
    <>
      {showForm && (
        <form onSubmit={formSubmit}>
          <StyledInput value={formValue} onChange={inputChange} type='text' />
          <button type='submit'>submit</button>
        </form>
      )}
      <Container>
        {todos &&
          _.map(todos, (value, key) => (
            <ListItem key={key} todoId={key} todo={value} />
          ))}
      </Container>
      <button onClick={() => setShow(!showForm)}>
        {showForm ? (
          <Symbol>Remover ToDo</Symbol>
        ) : (
          <Symbol>Adicionar ToDo</Symbol>
        )}
      </button>
    </>
  )
}
export default List
