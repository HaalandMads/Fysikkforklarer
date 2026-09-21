const CACHE = "fysikkforklarer-v1";
const FILES = ["./", "./index.html", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(FILES); }));
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.filter(function(k){ return k !== CACHE; }).map(function(k){ return caches.delete(k); }));
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(e){
  if (e.request.method !== "GET") return; // KI-kall (POST) gar alltid rett til nettverket
  e.respondWith(
    caches.match(e.request).then(function(cached){
      const nettverk = fetch(e.request).then(function(resp){
        caches.open(CACHE).then(function(c){ c.put(e.request, resp.clone()); });
        return resp;
      }).catch(function(){ return cached; });
      return cached || nettverk;
    })
  );
});
