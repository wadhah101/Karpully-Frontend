import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// eslint-disable-next-line import/no-cycle
import appReducer from './slices/appSlice';
import authReducer from './slices/authSlice';

const persistConfig = {
  key: 'root',
  version: 3,
  storage,
  whitelist: ['auth'],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  devTools: true,
});

const persistor = persistStore(store);

export type GlobalState = ReturnType<typeof rootReducer>;

export { store, persistor };
