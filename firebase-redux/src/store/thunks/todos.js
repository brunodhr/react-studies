import { completeToDo, addToDo, fetchToDos } from 'store/actions/todos'

export const complete = value => async dispatch => {
  await dispatch(completeToDo(value))
}
export const setTodo = value => async dispatch => {
  await dispatch(addToDo(value))
}
export const getTodo = () => async dispatch => {
  await dispatch(fetchToDos())
}
