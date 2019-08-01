import { setPlaces } from 'store/actions/places'
import API from 'utils/api'

export const getPlaces = () => async dispatch => {
  const response = await API.get('base/destinations')
  dispatch(setPlaces(response.data))
}
