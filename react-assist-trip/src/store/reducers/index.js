import { combineReducers } from 'redux'
import places from './places'

const reducers = combineReducers({
  places: places
})

export default reducers
