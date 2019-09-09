import { combineReducers } from 'redux'
import locale from './locale'
import current from './current'

const reducers = combineReducers({
  locale: locale,
  current: current
})

export default reducers
