  
//konstanta untuk nama cache 
const cacheName = "mgs-cache-v1";
// konstanta yang berisi array assets yang akan di cache
const assets = [
    '/',
    'index.html',
    'assets/img/favicon.png',
    'assets/img/apple-touch-icon.png',
    'assets/vendor/aos/aos.css',
    'assets/vendor/bootstrap/css/bootstrap.min.css',
    'assets/vendor/bootstrap-icons/bootstrap-icons.css',
    'assets/vendor/boxicons/css/boxicons.min.css',
    'assets/vendor/glightbox/css/glightbox.min.css',
    'assets/vendor/swiper/swiper-bundle.min.css',
    'assets/css/style.css',
    'assets/img/logo.png',
    'assets/img/hero-img.png',
    'assets/img/features-1.jpg',
    'assets/img/features-2.jpg',
    'assets/img/features-3.jpg',
    'assets/img/features-4.jpg',
    'assets/img/portfolio/portfolio-1.jpg',
    'assets/img/portfolio/portfolio-2.jpg',
    'assets/img/portfolio/portfolio-3.jpg',
    'assets/img/portfolio/portfolio-4.jpg',
    'assets/img/portfolio/portfolio-5.jpg',
    'assets/img/portfolio/portfolio-6.jpg',
    'assets/img/portfolio/portfolio-7.jpg',
    'assets/img/portfolio/portfolio-8.jpg',
    'assets/img/portfolio/portfolio-9.jpg',
    'assets/js/main.js',
    'assets/vendor/aos/aos.js',
    'assets/vendor/bootstrap/js/bootstrap.bundle.min.js',
    'assets/vendor/glightbox/js/glightbox.min.js',
    'assets/vendor/isotope-layout/isotope.pkgd.min.js',
    'assets/vendor/php-email-form/validate.js',
    'assets/vendor/swiper/swiper-bundle.min.js',
    'https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i',
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d698.9183736172116!2d110.3434758549138!3d-7.71750970706588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59c3d20c02cf%3A0xbb51ecb743f8c22f!2sPersewaan%20Tenda%20%26%20Event%20Organizer%20Mulia%20Grup%20Sleman!5e0!3m2!1sid!2sid!4v1621238824981!5m2!1sid!2sid'

];

// install service worker
self.addEventListener("install", event => {    
    event.waitUntil(
    //buka asset yang akan dicache
    caches.open(cacheName).then(cache => {
        // tambahkan/simpan asset kedalam cache 
      cache.addAll(assets);
    })
  );
});

//  service worker mulai menerima event fetch
self.addEventListener('fetch', event => {
    event.respondWith(
    // cek cache sesuai request, jika ada response yang cocok maka tampilkan dari cache dan jika tidak fetch ulang dari network sesuai request
    caches.match(event.request).then(res => {
      return res || fetch(event.request);
    })
  );
});