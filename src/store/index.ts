import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Action,
  Middleware,
  combineReducers,
  configureStore,
} from '@reduxjs/toolkit';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
  persistReducer,
  persistStore,
} from 'redux-persist';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { AuthSlice, AuthStateT } from './auth-store';
import { themelice, ThemeStateT } from './theme-store';

export interface RootStat {
  auth: AuthStateT;
  theme: ThemeStateT;
}

export const reducers = combineReducers({
  auth: AuthSlice,
  theme: themelice,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  version: 1,
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const middlewares: Middleware[] = [
  /* other middlewares */
];

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
      //   serializableCheck: false,
    }).concat(middlewares),
});

export type StoreDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Export the reset action
export const resetStore = (): Action => ({ type: 'RESET_STORE' });
