import {
  setLocaleRequest,
  setLocaleSuccess,
  setLocaleError
} from 'store/actions/locale'
import API from 'utils/api'

export const getLocale = () => async dispatch => {
  dispatch(setLocaleRequest())
  try {
    const response = await API.get(
      'locale/city/3477?token=8b19cc6adeddd4f207dcc2a45fe2688b'
    )
    dispatch(setLocaleSuccess(response.data))
  } catch (error) {
    dispatch(setLocaleError(error))
  }
}
