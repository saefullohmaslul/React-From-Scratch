import { combineReducers } from 'redux'
import { userReducer } from '@/store/modules/user'

export const rootReducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof rootReducer>