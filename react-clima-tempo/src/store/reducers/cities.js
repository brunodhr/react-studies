const initialState = {
  loading: false,
  cities: [],
  error: ''
}

const cities = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CITIES_REQUEST':
      return { ...state, loading: true }
    case 'SET_CITIES_SUCCESS':
      return { ...state, loading: false, cities: action.payload }
    case 'SET_CITIES_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default cities
