import { RouterProvider } from 'react-router-dom'
import { appRouter } from './app.router'
import { ToastContainer } from 'react-toastify'
import { appStore, persistedStore } from './app.store'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from './theme'
import styles from 'react-toastify/dist/ReactToastify.css?inline'
// TODO: FIX DOUBLE IMPORT
import 'react-toastify/dist/ReactToastify.css'
import { shadowRoot } from './shadowRootElement'

function attachStyleToShadowDom(shadowWrapper: ShadowRoot, cssContent: string) {
  // create a variable to attach the tailwind stylesheet
  const style = document.createElement('style')

  //Attach the stylesheet as text
  style.textContent = cssContent

  // apply the style
  shadowWrapper.appendChild(style)
}
attachStyleToShadowDom(shadowRoot, styles)
document.body.style.minHeight = '600px'

export const Providers = () => {
  return (
    <ReduxProvider store={appStore}>
      <PersistGate loading={null} persistor={persistedStore}>
        <ThemeProvider theme={theme}>
          <style>{'body: {display: "none!important"}'}</style>
          <CssBaseline />
          <RouterProvider router={appRouter()} />
          <ToastContainer position='bottom-right' />
        </ThemeProvider>
      </PersistGate>
    </ReduxProvider>
  )
}
