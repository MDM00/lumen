/* Lumen service worker — versione 1.0.0
   Quando aggiorni i file del sito, cambia il numero di versione qui sotto:
   così telefono e computer scaricano la nuova versione. */
const VERSION = "lumen-1.0.0";
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'vendor/jszip.min.js', 'fonts/is-400-italic.woff2', 'fonts/is-400.woff2', 'fonts/pjs-300.woff2', 'fonts/pjs-400.woff2', 'fonts/pjs-500.woff2', 'fonts/pjs-600.woff2', 'fonts/pjs-700.woff2', 'fonts/pjs-800.woff2', 'icons/apple-touch-icon.png', 'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-maskable-512.png'];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  if (req.mode === "navigate") {
    e.respondWith(caches.match("index.html").then(r => r || fetch(req)));
    return;
  }
  e.respondWith(caches.match(req, {ignoreSearch: true}).then(r => r || fetch(req).then(res => {
    if (res.ok) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
    return res;
  })));
});
