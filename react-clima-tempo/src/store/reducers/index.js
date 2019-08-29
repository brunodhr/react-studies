import { combineReducers } from 'redux'
import locale from './locale'

const reducers = combineReducers({
  locale: locale
})

export default reducers
