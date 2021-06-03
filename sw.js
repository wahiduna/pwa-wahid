const cacheName = "mgs-cache-v1";
const assets = [
    "./",
    "./index.html",
    "./css/style.css",
    "./js/app.js",
    "./assets/img/favicon.png",
    "./assets/img/apple-touch-icon.png",
    "./assets/vendor/aos/aos.css",
    "./assets/vendor/bootstrap/css/bootstrap.min.css",
    "./assets/vendor/bootstrap-icons/bootstrap-icons.css",
    "./assets/vendor/boxicons/css/boxicons.min.css",
    "./assets/vendor/glightbox/css/glightbox.min.css",
    "./assets/vendor/swiper/swiper-bundle.min.css",
    "./assets/css/style.css",
    "./assets/vendor/aos/aos.js",
    "./assets/vendor/bootstrap/js/bootstrap.bundle.min.js",
    "./assets/vendor/glightbox/js/glightbox.min.js",
    "./assets/vendor/isotope-layout/isotope.pkgd.min.js",
    "./assets/vendor/php-email-form/validate.js",
    "./assets/vendor/swiper/swiper-bundle.min.js"
];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(cacheName).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});