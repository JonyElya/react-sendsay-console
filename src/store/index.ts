import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './slices/auth';
import { consoleSlice } from './slices/console';

const persistConfig = {
  key: 'root',
  storage,
};

const reducers = combineReducers({ auth: authSlice.reducer, console: consoleSlice.reducer });

const persistReducers = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistReducers,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false });
  },
});
