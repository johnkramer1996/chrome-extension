import { createSlice } from '@reduxjs/toolkit'

type SettingsSliceState = {
  mode: 'full' | 'popup'
  status: 'open' | 'close'
}

const initialState = {
  mode: 'full',
  status: 'open',
} as const

export const settingsSlice = createSlice({
  name: 'settings',
  initialState: initialState satisfies SettingsSliceState as SettingsSliceState,
  reducers: {
    toggleMode: (state) => {
      state.mode = state.mode === 'full' ? 'popup' : 'full'
    },
    toggleExtension: (state) => {
      state.status = state.status === 'open' ? 'close' : 'open'
    },
  },
})

export const selectMode = (state: RootState) => state.settings.mode
export const selectIsFull = (state: RootState) => state.settings.mode === 'full'
export const selectStatus = (state: RootState) => state.settings.status

export const { toggleMode, toggleExtension } = settingsSlice.actions
