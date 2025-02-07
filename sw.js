// Service Worker (sw.js) for offline support
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("offline-cache").then((cache) => {
      return cache.addAll(["index.html", "script.js", "style.css"]);
    })
  );
  self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
