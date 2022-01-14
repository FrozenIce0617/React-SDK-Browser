import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit'
import logger from 'redux-logger'

import rootReducer from './rootReducer'

const middlewares = process.env.NODE_ENV !== 'production' ? [logger] : []

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middlewares),
  devTools: process.env.NODE_ENV === 'development',
  enhancers: [],
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector

export const useDispatch = () => useReduxDispatch<AppDispatch>()

export { store }
