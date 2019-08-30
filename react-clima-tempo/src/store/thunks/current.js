import {
  setCurrentRequest,
  setCurrentSuccess,
  setCurrentError
} from 'store/actions/current'
import API from 'utils/api'

const token = '20ccac099a5b9d1392fd4c0048e3ff7c'

export const getCurrent = () => async dispatch => {
  dispatch(setCurrentRequest())
  try {
    const response = await API.get(`weather/locale/6879/current?token=${token}`)
    dispatch(setCurrentSuccess(response.data))
  } catch (error) {
    dispatch(setCurrentError(error))
  }
}
