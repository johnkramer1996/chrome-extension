import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline, GlobalStyles, ThemeProvider } from '@mui/material'
import { theme } from './theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles
        styles={{
          body: {
            fontFamily: 'Plain',
            fontSize: '16px',
            lineHeight: '1.5',
            minHeight: 'calc(100vh + 100px)',
            background:
              'linear-gradient(295.01deg, #92C5FF 2.69%, rgba(59, 78, 106, 0.814312) 10.71%, rgba(5, 5, 15, 0.7) 23.66%, #05050F 36.23%, rgba(5, 5, 15, 0.6) 66.55%, rgba(64, 86, 116, 0.769137) 83.87%, #92C5FF 94.18%);',
          },
          img: {
            verticalAlign: 'top',
          },
        }}
      />
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
