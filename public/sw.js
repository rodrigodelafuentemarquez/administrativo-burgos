const CACHE = 'administrativo-burgos-v1';
const ASSETS = [
  '/administrativo-burgos/',
  '/administrativo-burgos/manifest.webmanifest',
  '/administrativo-burgos/favicon.ico',
  '/administrativo-burgos/favicon.png',
  '/administrativo-burgos/icons/icon-192.png',
  '/administrativo-burgos/icons/icon-512.png',
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(ASSETS)).catch(() => null));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request)));
});
