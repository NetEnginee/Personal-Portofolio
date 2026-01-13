const CACHE_NAME = "badil-portofolio-v1";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./style/style.css",
  "./script.js",
  "./assets/image/admin/Personal Picture.webp",
  "./assets/image/project/pomodoro.webp",
  "./assets/image/project/taskly.webp",
  "./assets/image/project/personal portofolio.webp",
  "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        console.log("Service Worker: Caching Assets");
        return cache.addAll(ASSETS_TO_CACHE);
      })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Clearing Old Cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      const networkFetch = fetch(e.request).then((networkResponse) => {
        const responseToCache = networkResponse.clone();

        caches.open(CACHE_NAME).then((cache) => {
          cache.put(e.request, responseToCache);
        });

        return networkResponse;
      });

      return cachedResponse || networkFetch;
    })
  );
});
