import { createRoot } from 'react-dom/client'
import { Providers } from './Providers'
import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'
import { shadowRootElement } from './shadowRootElement'

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
