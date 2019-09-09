import {
  setProductsRequest,
  setProductsSuccess,
  setProductsError
} from 'store/actions/products'
import API from 'utils/api'

export const getProducts = () => async dispatch => {
  dispatch(setProductsRequest())
  try {
    const response = await API.get('base/products')
    dispatch(setProductsSuccess(response.data))
  } catch (error) {
    dispatch(setProductsError(error))
  }
}
