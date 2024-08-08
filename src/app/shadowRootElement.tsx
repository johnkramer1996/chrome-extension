const container = document.createElement('div')
container.id = 'nyle-root'
const shadowRoot = container.attachShadow({ mode: 'open' })
const body = document.createElement('body')
export const shadowRootElement = document.createElement('div')
shadowRootElement.id = 'root'
document.body.append(container)
body.append(shadowRootElement)
shadowRoot.append(body)

// export const shadowRootElement = document.createElement('div')
// shadowRootElement.id = 'nyle-root'
// document.querySelector('body')?.append(shadowRootElement)
