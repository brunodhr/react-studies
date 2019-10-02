import {
  setLocaleRequest,
  setLocaleSuccess,
  setLocaleError
} from 'store/actions/locale'
import API from 'utils/api'

const token = process.env.REACT_APP_API_TOKEN

export const getLocale = () => async dispatch => {
  dispatch(setLocaleRequest())
  try {
    const response = await API.get(`locale/city/6879?token=${token}`)
    dispatch(setLocaleSuccess(response.data))
  } catch (error) {
    dispatch(setLocaleError(error))
  }
}
