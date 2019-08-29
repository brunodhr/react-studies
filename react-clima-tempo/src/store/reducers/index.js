import { combineReducers } from 'redux'
import cities from './cities'

const reducers = combineReducers({
  cities: cities
})

export default reducers
