self.addEventListener("install", e =>{
  e.waitUntil(
    caches.open("punch-cache").then(cache=>{
      return cache.addAll([
        "punchhamel.html",
        "manifest.json",
        "icon-192.png",
        "icon-512.png"
      ]);
    })
  );
});
self.addEventListener("fetch", e =>{
  e.respondWith(caches.match(e.request).then(r=>r || fetch(e.request)))
});