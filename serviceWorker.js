const cacheName = 'mgs-cache-v1';
const assets = [
    '/',
    'index.html',
    'css/style.css',
    'js/app.js',
    'assets/img/favicon.png',
    'assets/img/apple-touch-icon.png'    
];

self.addEventListener("install", event => {
    console.log("install cache");
    event.waitUntil(
    caches.open(cacheName).then(cache => {
        console.log("success install");
      cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', event => {
    event.respondWith(
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});