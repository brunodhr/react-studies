const initialState = {
  loading: false,
  products: [],
  error: ''
}

const products = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS_REQUEST':
      return { ...state, loading: true }
    case 'SET_PRODUCTS_SUCCESS':
      return { ...state, loading: false, products: action.payload }
    case 'SET_PRODUCTS_ERROR':
      return { ...state, loading: false, error: action.payload }

    default:
      return state
  }
}

export default products
