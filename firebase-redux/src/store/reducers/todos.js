const todos = (state = [], action) => {
  switch (action.type) {
    case 'FETCH_TODOS':
      return action.payload

    default:
      return state
  }
}

export default todos
