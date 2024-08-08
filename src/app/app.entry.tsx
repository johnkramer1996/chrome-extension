import { createRoot } from 'react-dom/client'
import { Providers } from './Providers'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { shadowRootElement } from './shadowRootElement'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import 'assets/fonts/plain/style.css'

// const start = async () => await worker.start({ onUnhandledRequest: 'bypass', quiet: true })
const start = async () => Promise.resolve()

const cache = createCache({
  key: 'css',
  prepend: true,
  container: shadowRootElement,
})

start().then(async () => {
  createRoot(shadowRootElement).render(
    <CacheProvider value={cache}>
      <Providers />
    </CacheProvider>,
  )
})
