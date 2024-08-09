chrome.action.onClicked.addListener(async (tab) => {
  if (!tab.id) return
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: () => {
      const container = document.getElementById('nyle-root')!
      if (container.classList.contains('active')) {
        container.classList.remove('active')
        container.style.opacity = '0'
        container.style.visibility = 'hidden'
      } else {
        container.classList.add('active')
        container.style.opacity = '1'
        container.style.visibility = 'visible'
      }
    },
  })
})
