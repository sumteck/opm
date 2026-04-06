const cacheName = 'office-proceedings-v4';
const assets = [
  './',
  './index.html',
  './manifest.json',
  './logo192.png',
  './logo512.png'
];

// ഇൻസ്റ്റാൾ ചെയ്യുമ്പോൾ ഫയലുകൾ സേവ് ചെയ്യുന്നു
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

// ആപ്പ് പ്രവർത്തിപ്പിക്കുമ്പോൾ സേവ് ചെയ്ത ഫയലുകൾ കാണിക്കുന്നു
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});
