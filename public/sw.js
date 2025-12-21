// Service Worker for Screen Time Journey PWA
const CACHE_NAME = 'stj-dashboard-v1';
const STATIC_CACHE = 'stj-static-v1';
const DYNAMIC_CACHE = 'stj-dynamic-v1';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json',
  '/favicon.ico',
  'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=DM+Serif+Display&display=swap'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static assets');
        return cache.addAll(STATIC_ASSETS);
      })
      .catch((error) => {
        console.error('Service Worker: Failed to cache static assets', error);
      })
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            console.log('Service Worker: Deleting old cache', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache or network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and external requests
  if (event.request.method !== 'GET' ||
      !event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip API calls - let them go to network
  if (event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return fetch(event.request)
          .then((response) => {
            // Don't cache non-successful responses
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(DYNAMIC_CACHE)
              .then((cache) => {
                cache.put(event.request, responseToCache);
              });

            return response;
          })
          .catch((error) => {
            console.error('Service Worker: Fetch failed', error);
            // Return offline fallback if available
            if (event.request.destination === 'document') {
              return caches.match('/');
            }
          });
      })
  );
});

// Handle push notifications
self.addEventListener('push', (event) => {
  console.log('Service Worker: Push received', event);

  let data = {};
  if (event.data) {
    data = event.data.json();
  }

  const options = {
    body: data.body || 'You have a new notification from Screen Time Journey!',
    icon: 'https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_favi_purple_v2.png?v=1757864301',
    badge: 'https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_favi_purple_v2.png?v=1757864301',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: data.primaryKey || 1
    },
    actions: [
      {
        action: 'explore',
        title: 'View Details',
        icon: 'https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_favi_purple_v2.png?v=1757864301'
      },
      {
        action: 'close',
        title: 'Close',
        icon: 'https://cdn.shopify.com/s/files/1/0866/6749/3623/files/stj_favi_purple_v2.png?v=1757864301'
      }
    ]
  };

  event.waitUntil(
    self.registration.showNotification(
      data.title || 'Screen Time Journey',
      options
    )
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
  console.log('Service Worker: Notification click received', event);

  event.notification.close();

  if (event.action === 'explore') {
    // Open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  } else {
    // Default action - open the app
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Handle background sync for offline actions
self.addEventListener('sync', (event) => {
  console.log('Service Worker: Background sync', event);

  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

// Background sync function
async function doBackgroundSync() {
  try {
    // Implement any background sync logic here
    console.log('Service Worker: Performing background sync');
  } catch (error) {
    console.error('Service Worker: Background sync failed', error);
  }
}

// Handle messages from the main thread
self.addEventListener('message', (event) => {
  console.log('Service Worker: Message received', event.data);

  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
