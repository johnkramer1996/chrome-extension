import { createRoot } from 'react-dom/client'
import { Providers } from './Providers'

const body = document.querySelector('body')
const app = document.createElement('div')
app.id = 'root'
if (body) body.prepend(app)

const root = document.getElementById('root') as HTMLElement

// const start = async () => await worker.start({ onUnhandledRequest: 'bypass', quiet: true })
const start = async () => Promise.resolve()

start().then(async () => {
  createRoot(root).render(<Providers />)
})
