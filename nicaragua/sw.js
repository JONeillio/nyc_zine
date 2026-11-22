/* Offline support for the Nicaragua zine.
   Code and pages: network first, so updates arrive whenever there's signal; the cached copy is used offline.
   Photos: cache first. Photos hosted by operators load from their own sites and are kept only in this
   phone's browser cache, never copied into the repository. */
const SHELL = 'nic-shell-v2';
const PHOTOS = 'nic-photos-v1';
const SHELL_FILES = [
  './', 'index.html', 'list.html', 'data.js', 'story.js', 'route-geo.js', 'routemap.js', 'book.js', 'nic.css', 'manifest.webmanifest', 'assets/credits.json',
  '../book.css', '../assets/fonts/union_gothic-variable.ttf', '../assets/vendor/page-flip.browser.js', '../assets/favicon.svg', '../assets/icon-192.png'
];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(SHELL).then(c => c.addAll(SHELL_FILES)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', event => {
  event.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k.startsWith('nic-') && k !== SHELL && k !== PHOTOS).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

const isImage = req => req.destination === 'image' || /\.(webp|jpe?g|png|svg)(\?|$)/i.test(new URL(req.url).pathname);

async function photoFirst(req) {
  const cache = await caches.open(PHOTOS);
  const hit = await cache.match(req, {ignoreVary: true});
  if (hit) return hit;
  const res = await fetch(req);
  // Opaque responses from other sites can be cached for offline viewing on this device.
  if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
  return res;
}

async function networkFirst(req) {
  const cache = await caches.open(SHELL);
  try {
    const res = await fetch(req);
    if (res.ok) cache.put(req, res.clone());
    return res;
  } catch (e) {
    const hit = await cache.match(req, {ignoreSearch: true});
    if (hit) return hit;
    throw e;
  }
}

self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET') return;
  const sameOrigin = new URL(req.url).origin === self.location.origin;
  if (isImage(req)) event.respondWith(photoFirst(req));
  else if (sameOrigin) event.respondWith(networkFirst(req));
});

/* "Save photos for offline": fetch every photo in the zine now, reporting progress. */
self.addEventListener('message', event => {
  if (event.data?.type !== 'save-photos') return;
  const urls = event.data.urls || [];
  const client = event.source;
  event.waitUntil((async () => {
    const cache = await caches.open(PHOTOS);
    let saved = 0, failed = 0;
    for (const url of urls) {
      try {
        const remote = new URL(url, self.location).origin !== self.location.origin;
        const req = new Request(url, remote ? {mode: 'no-cors', referrerPolicy: 'no-referrer'} : {});
        if (!(await cache.match(req, {ignoreVary: true}))) {
          const res = await fetch(req);
          if (!(res.ok || res.type === 'opaque')) throw new Error(res.status);
          await cache.put(req, res);
        }
        saved++;
      } catch (e) { failed++; }
      client?.postMessage({type: 'save-progress', saved, failed, total: urls.length});
    }
    client?.postMessage({type: 'save-done', saved, failed, total: urls.length});
  })());
});
