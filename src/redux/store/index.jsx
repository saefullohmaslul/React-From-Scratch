import { combineReducers, createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware'

import menus from '@/redux/reducers/menu.reducer'

const reducers = combineReducers({
  menus
})

const store = createStore(reducers, applyMiddleware(promise))

export default store
