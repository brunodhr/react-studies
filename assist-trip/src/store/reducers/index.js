import { combineReducers } from 'redux'
import places from './places'
import products from './products'

const reducers = combineReducers({
  places: places,
  products: products
})

export default reducers
