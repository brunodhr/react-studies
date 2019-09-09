export const setProductsRequest = () => ({
  type: 'SET_PRODUCTS_REQUEST'
})

export const setProductsSuccess = products => ({
  type: 'SET_PRODUCTS_SUCCESS',
  payload: products
})

export const setProductsError = error => ({
  type: 'SET_PRODUCTS_ERROR',
  payload: error
})
