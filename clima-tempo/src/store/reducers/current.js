const initialState = {
  loading: false,
  current: '',
  error: ''
}

const current = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CURRENT_REQUEST':
      return { ...state, loading: true }
    case 'SET_CURRENT_SUCCESS':
      return { ...state, loading: false, current: action.payload }
    case 'SET_CURRENT_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default current
