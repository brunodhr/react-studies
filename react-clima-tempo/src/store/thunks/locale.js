import {
  setLocaleRequest,
  setLocaleSuccess,
  setLocaleError
} from 'store/actions/locale'
import API from 'utils/api'

//To Do : send this token to global config file
const token = '20ccac099a5b9d1392fd4c0048e3ff7c'

export const getLocale = () => async dispatch => {
  dispatch(setLocaleRequest())
  try {
    const response = await API.get(`locale/city/6879?token=${token}`)
    dispatch(setLocaleSuccess(response.data))
  } catch (error) {
    dispatch(setLocaleError(error))
  }
}
