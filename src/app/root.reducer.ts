import { combineReducers } from '@reduxjs/toolkit'
import { sessionSlice } from 'entities/session'
import { settingsSlice } from 'entities/settings'
import { themeSlice } from 'entities/theme'
import { baseApi } from 'shared/api'

export const rootReducer = combineReducers({
  [sessionSlice.name]: sessionSlice.reducer,
  [settingsSlice.name]: settingsSlice.reducer,
  [themeSlice.name]: themeSlice.reducer,
  [baseApi.reducerPath]: baseApi.reducer,
})
