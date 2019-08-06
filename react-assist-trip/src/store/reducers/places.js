const initialState = {
  loading: false,
  places: [],
  error: ''
}

const places = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PLACES_REQUEST':
      return { ...state, loading: true }
    case 'SET_PLACES_SUCCESS':
      return { ...state, loading: false, places: action.payload }
    case 'SET_PLACES_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default places
