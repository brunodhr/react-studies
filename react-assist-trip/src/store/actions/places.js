export const setPlacesRequest = () => ({
  type: 'SET_PLACES_REQUEST'
})

export const setPlacesSuccess = places => ({
  type: 'SET_PLACES_SUCCESS',
  payload: places
})

export const setPlacesError = error => ({
  type: 'SET_PLACES_ERROR',
  payload: error
})
