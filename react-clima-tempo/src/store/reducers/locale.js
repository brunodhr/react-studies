const initialState = {
  loading: false,
  locale: [],
  error: ''
}

const locale = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_LOCALE_REQUEST':
      return { ...state, loading: true }
    case 'SET_LOCALE_SUCCESS':
      return { ...state, loading: false, locale: action.payload }
    case 'SET_LOCALE_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default locale
