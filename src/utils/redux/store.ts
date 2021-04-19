import { combineReducers, configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import appReducer from './slices/appSlice'

const rootReducer = combineReducers({
  counter: counterReducer,
  app: appReducer,
})

export type CoreState = ReturnType<typeof rootReducer>

export default configureStore({
  reducer: rootReducer,
  devTools: true,
})
