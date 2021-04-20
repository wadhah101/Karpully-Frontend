import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import appReducer from './slices/appSlice'
import authReducer from './slices/authSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  app: appReducer,
  auth: authReducer,
})

export type CoreState = ReturnType<typeof rootReducer>

export default configureStore({
  reducer: rootReducer,
  devTools: true,
})
