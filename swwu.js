const CACHE_NAME = 'EWriteup';
const ASSETS = [
  'WU_2026.html',
  'manifestwu.json',
  'iconwu1.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});
