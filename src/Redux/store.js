import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/auth-slice';
import contactsReducer from './reducers';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    contacts: contactsReducer,
  },
  middleware: middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
