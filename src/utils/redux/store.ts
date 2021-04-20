import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import counterReducer from './slices/counterSlice'
import appReducer from './slices/appSlice'
import authReducer from './slices/authSlice'

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['auth'],
}

const rootReducer = combineReducers({
  counter: counterReducer,
  app: appReducer,
  auth: authReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store)

export type CoreState = ReturnType<typeof rootReducer>

export { store, persistor }
