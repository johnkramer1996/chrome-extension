const container = document.createElement('div')
container.id = 'nyle-root'
container.style.opacity = '0'
container.style.visibility = 'hidden'
export const shadowRoot = container.attachShadow({ mode: 'open' })
const body = document.createElement('body')
export const shadowRootElement = document.createElement('div')
shadowRootElement.id = 'root'
document.body.append(container)
body.append(shadowRootElement)
shadowRoot.append(body)
container.style.minHeight = '600px' // for default_popup
