export const setCurrentRequest = () => ({
  type: 'SET_CURRENT_REQUEST'
})

export const setCurrentSuccess = current => ({
  type: 'SET_CURRENT_SUCCESS',
  payload: current
})

export const setCurrentError = error => ({
  type: 'SET_CURRENT_ERROR',
  payload: error
})
