import { combineReducers } from 'redux'
import { userReducer } from '@/store/modules/user'
import { productReducer } from '@/store/modules/products'

export const rootReducer = combineReducers({
  user: userReducer,
  products: productReducer
})

export type RootState = ReturnType<typeof rootReducer>