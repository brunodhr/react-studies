import {
  setCurrentRequest,
  setCurrentSuccess,
  setCurrentError
} from 'store/actions/current'
import API from 'utils/api'

const token = process.env.REACT_APP_API_TOKEN

export const getCurrent = () => async dispatch => {
  dispatch(setCurrentRequest())
  try {
    const response = await API.get(`weather/locale/6879/current?token=${token}`)
    dispatch(setCurrentSuccess(response.data))
  } catch (error) {
    dispatch(setCurrentError(error))
  }
}
