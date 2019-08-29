import {
  setCitiesRequest,
  setCitiesSuccess,
  setCitiesError
} from 'store/actions/cities'
import API from 'utils/api'

export const getCities = () => async dispatch => {
  dispatch(setCitiesRequest())
  try {
    const response = await API.get(
      'locale/city/3477?token=8b19cc6adeddd4f207dcc2a45fe2688b'
    )
    console.log('aosdfijaosif', response)
    dispatch(setCitiesSuccess(response.data))
  } catch (error) {
    dispatch(setCitiesError(error))
  }
}
