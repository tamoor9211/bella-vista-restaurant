// Service Worker for caching and performance optimization
const CACHE_NAME = 'bella-vista-v1'
const STATIC_CACHE = 'bella-vista-static-v1'
const DYNAMIC_CACHE = 'bella-vista-dynamic-v1'

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/main.js',
  '/src/style.css',
  'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap'
]

// Install event - cache static assets
self.addEventListener('install', event => {
  console.log('Service Worker: Installing...')
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then(cache => {
        console.log('Service Worker: Caching static assets')
        return cache.addAll(STATIC_ASSETS)
      })
      .then(() => {
        console.log('Service Worker: Static assets cached')
        return self.skipWaiting()
      })
      .catch(error => {
        console.error('Service Worker: Failed to cache static assets', error)
      })
  )
})

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker: Activating...')
  
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
              console.log('Service Worker: Deleting old cache', cacheName)
              return caches.delete(cacheName)
            }
          })
        )
      })
      .then(() => {
        console.log('Service Worker: Activated')
        return self.clients.claim()
      })
  )
})

// Fetch event - serve from cache with network fallback
self.addEventListener('fetch', event => {
  const { request } = event
  const url = new URL(request.url)
  
  // Skip non-GET requests
  if (request.method !== 'GET') {
    return
  }
  
  // Skip external requests (except fonts)
  if (url.origin !== location.origin && !url.hostname.includes('fonts.googleapis.com') && !url.hostname.includes('fonts.gstatic.com')) {
    return
  }
  
  event.respondWith(
    caches.match(request)
      .then(cachedResponse => {
        // Return cached version if available
        if (cachedResponse) {
          console.log('Service Worker: Serving from cache', request.url)
          return cachedResponse
        }
        
        // Otherwise fetch from network
        return fetch(request)
          .then(networkResponse => {
            // Don't cache if not a valid response
            if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
              return networkResponse
            }
            
            // Clone the response
            const responseToCache = networkResponse.clone()
            
            // Determine which cache to use
            const cacheToUse = STATIC_ASSETS.includes(request.url) ? STATIC_CACHE : DYNAMIC_CACHE
            
            // Cache the response
            caches.open(cacheToUse)
              .then(cache => {
                console.log('Service Worker: Caching new resource', request.url)
                cache.put(request, responseToCache)
              })
            
            return networkResponse
          })
          .catch(error => {
            console.error('Service Worker: Fetch failed', error)
            
            // Return offline fallback for HTML requests
            if (request.headers.get('accept').includes('text/html')) {
              return caches.match('/offline.html')
            }
            
            throw error
          })
      })
  )
})

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered')
    event.waitUntil(doBackgroundSync())
  }
})

async function doBackgroundSync() {
  // Handle any pending offline actions
  try {
    const pendingActions = await getStoredActions()
    
    for (const action of pendingActions) {
      try {
        await fetch(action.url, action.options)
        await removeStoredAction(action.id)
        console.log('Service Worker: Synced action', action.id)
      } catch (error) {
        console.error('Service Worker: Failed to sync action', action.id, error)
      }
    }
  } catch (error) {
    console.error('Service Worker: Background sync failed', error)
  }
}

// Helper functions for offline storage
async function getStoredActions() {
  try {
    const cache = await caches.open(DYNAMIC_CACHE)
    const response = await cache.match('/offline-actions')
    if (response) {
      return await response.json()
    }
  } catch (error) {
    console.error('Service Worker: Failed to get stored actions', error)
  }
  return []
}

async function removeStoredAction(actionId) {
  try {
    const actions = await getStoredActions()
    const updatedActions = actions.filter(action => action.id !== actionId)
    
    const cache = await caches.open(DYNAMIC_CACHE)
    await cache.put('/offline-actions', new Response(JSON.stringify(updatedActions)))
  } catch (error) {
    console.error('Service Worker: Failed to remove stored action', error)
  }
}

// Push notification handling (for future use)
self.addEventListener('push', event => {
  if (event.data) {
    const data = event.data.json()
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/badge-72x72.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: data.primaryKey
      },
      actions: [
        {
          action: 'explore',
          title: 'View Menu',
          icon: '/icon-menu.png'
        },
        {
          action: 'close',
          title: 'Close',
          icon: '/icon-close.png'
        }
      ]
    }
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    )
  }
})

// Notification click handling
self.addEventListener('notificationclick', event => {
  event.notification.close()
  
  if (event.action === 'explore') {
    event.waitUntil(
      clients.openWindow('/#menu')
    )
  } else if (event.action === 'close') {
    // Just close the notification
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    )
  }
})

// Message handling from main thread
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
  
  if (event.data && event.data.type === 'GET_VERSION') {
    event.ports[0].postMessage({ version: CACHE_NAME })
  }
  
  if (event.data && event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(DYNAMIC_CACHE)
        .then(cache => cache.addAll(event.data.urls))
    )
  }
})

console.log('Service Worker: Loaded')
