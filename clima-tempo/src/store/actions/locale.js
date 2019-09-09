export const setLocaleRequest = () => ({
  type: 'SET_LOCALE_REQUEST'
})

export const setLocaleSuccess = locale => ({
  type: 'SET_LOCALE_SUCCESS',
  payload: locale
})

export const setLocaleError = error => ({
  type: 'SET_LOCALE_ERROR',
  payload: error
})
