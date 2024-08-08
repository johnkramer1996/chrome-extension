import { RouterProvider } from 'react-router-dom'
import { appRouter } from './app.router'
import { ToastContainer } from 'react-toastify'
import { appStore, persistedStore } from './app.store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import 'react-toastify/dist/ReactToastify.css'

export const Providers = () => {
  return (
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider theme={theme}>
          <GlobalStyles styles={{}} />
          <CssBaseline />
          <RouterProvider router={appRouter()} />
          <ToastContainer position='bottom-right' />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  )
}
