export const setCitiesRequest = () => ({
  type: 'SET_CITIES_REQUEST'
})

export const setCitiesSuccess = places => ({
  type: 'SET_CITIES_SUCCESS',
  payload: places
})

export const setCitiesError = error => ({
  type: 'SET_CITIES_ERROR',
  payload: error
})
