import { createSlice } from '@reduxjs/toolkit'

type SettingsSliceState = {
  mode: 'full' | 'popup'
}

const initialState = {
  mode: 'popup',
} as const

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState satisfies SettingsSliceState as SettingsSliceState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'full' ? 'popup' : 'full'
    },
  },
})

export const selectMode = (state: RootState) => state.settings.mode
export const selectIsFull = (state: RootState) => state.settings.mode === 'full'

export const { toggleMode } = settingsSlice.actions
