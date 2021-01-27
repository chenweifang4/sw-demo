// sw.js
const CACHE_NAME = 'sw-cache-v1'
const isDev = location.hostname.includes('localhost')
const cacheSourceList = [
  '/standalone/cat.png',
  '/standalone/dog.png',
  '/standalone/styles.css',
  '/standalone/others.js',
  '/standalone/new.js',
  '/standalone/chunk.js',
  '/standalone/chunk2.js',
  '/standalone/chunk3.js',
].map(item => {
  return isDev ? item : `/sw-demo${item}`
})

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(cacheSourceList)
      })
      .catch(error => console.error('caches open error 💔 ', error))
  )
})

// self.addEventListener('activate', (event) => {
//   event.waitUntil(
//     caches.keys().then((cacheNames) => {
//       return Promise.all(cacheNames.filter((cacheName) => {
//         // 
//         }).map((cacheName) => {
//           return caches.delete(cacheName)
//         })
//       )
//     })
//   )
// })

self.addEventListener('fetch', event => {
  event.respondWith(
    // 从缓存中检查是否存在缓存
    caches
      .match(event.request)
      .then(response => {
        // console.log('event.request ', event.request)
        // console.log('response ', response)
        // 如果存在，直接取缓存内容
        // 如果不存在，那么从网络中去获取
        if (response) {
          return response
        }
        return fetch(event.request)
      })
      .catch(error => console.error('caches match error 💔 ', error))
  )
})

