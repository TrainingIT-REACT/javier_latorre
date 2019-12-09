self.addEventListener("install", event => {
  console.log("Service worker!");
});

// Init Workbox
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

self.addEventListener("activate", event => {
  console.log("el nuevo service worker se ha activado");
});

self.addEventListener("message", e => {
  if (e.data.action === "skipWaiting") {
    self.skipWaiting();
  }
});
