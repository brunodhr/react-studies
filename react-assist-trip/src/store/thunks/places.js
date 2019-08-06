import {
  setPlacesRequest,
  setPlacesSuccess,
  setPlacesError
} from 'store/actions/places'
import API from 'utils/api'

export const getPlaces = () => async dispatch => {
  dispatch(setPlacesRequest())
  try {
    const response = await API.get('base/destinations')
    dispatch(setPlacesSuccess(response.data))
  } catch (error) {
    dispatch(setPlacesError(error))
  }
}
