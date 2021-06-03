// Cek service serviceWorker ada di navigator 
if ("serviceWorker" in navigator) {
  // jalankan event ketika window di load
  window.addEventListener("load", function() {
    // panggil layanan service worker pada navigator dan register file sw.js yang berisi config service worker 
    navigator.serviceWorker
      .register("./sw.js")
      .then(res => console.log("service worker registered", res))
      .catch(err => console.log("service worker not registered", err));
  });
}
