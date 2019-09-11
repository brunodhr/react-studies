import { todosRef } from 'config/firebase'

export const addToDo = newToDo => {
  todosRef.push().set(newToDo)
}

export const completeToDo = completeToDoId => {
  todosRef.child(completeToDoId).remove()
}

export const fetchToDos = () => async dispatch => {
  todosRef.on('value', snapshot => {
    dispatch({
      type: 'FETCH_TODOS',
      payload: snapshot.val()
    })
  })
}
