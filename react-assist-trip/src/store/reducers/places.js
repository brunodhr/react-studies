const initialState = {
  places: [
    {
      id: 1,
      name: 'teste'
    },
    {
      id: 2,
      name: 'teste'
    },
    {
      id: 3,
      name: 'teste'
    }
  ]
}

const places = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLACES':
      return { ...state, places: action.payload }

    default:
      return state
  }
}

export default places
