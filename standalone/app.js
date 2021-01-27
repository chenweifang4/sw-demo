// app.js
const isDev = location.hostname.includes('localhost')
const registerScope = isDev ? '/standalone/' : '/sw-learning/standalone/'
const unRegisterServiceWorker = location.search.includes('unRegisterServiceWorker=1')

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    if (unRegisterServiceWorker) {
      window.navigator.serviceWorker.getRegistrations().then(registrations => {
        for (const registration of registrations) {
          registration.unregister()
        }
      })
      return
    }
    navigator.serviceWorker.register('sw.js', { scope: registerScope })
      .then(reg => console.log('[app.js] service worker registeration successed 😎', reg))
      .catch(err => console.log('[app.js] service worker registeration failed 😥', err))
  })
}
