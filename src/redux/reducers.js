import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import menu from './menu/reducers'
import settings from './settings/reducers'
import user from './user/reducers'
import data from './data/reducers'

export default history =>
  combineReducers({
    router: connectRouter(history),
    menu,
    user,
    settings,
    data
  })
