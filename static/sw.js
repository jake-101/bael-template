importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bael-cms-template",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/2a145ca4b28e87566dfd.js",
    "revision": "8e05531d2aa21498066b64d6ea20b35e"
  },
  {
    "url": "/_nuxt/43e5f5f3a630c46ea872.js",
    "revision": "9aa12c82428c229778d91cb34e139d5a"
  },
  {
    "url": "/_nuxt/542a4c9592ea81e14678.css",
    "revision": "05fdf43487746902039ab01d68d6063f"
  },
  {
    "url": "/_nuxt/6509f8763ffaa94882f1.js",
    "revision": "24cacf07838efdaa7ed5562ab105cf6d"
  },
  {
    "url": "/_nuxt/68a10469d653d7761042.css",
    "revision": "0dfcd8f1a9bbca12d3cb32d12980a703"
  },
  {
    "url": "/_nuxt/9b386504f0e1988df19a.css",
    "revision": "76fef9861851f2ee38590539976b8fd1"
  },
  {
    "url": "/_nuxt/b4049bfeb8ccb6282012.css",
    "revision": "cfef01e8b2f16b0f478ba50c66f231b2"
  },
  {
    "url": "/_nuxt/be849577e80ec4ab2198.js",
    "revision": "9bff5d7fe32038138ce76806da909631"
  },
  {
    "url": "/_nuxt/bf55a51b1f8334c5b089.js",
    "revision": "d6eb1dc6c72a7debaba22540922e38d0"
  },
  {
    "url": "/_nuxt/f9d6c18fe205b467f909.js",
    "revision": "042566d1bf7f4360b78014740d3f98bc"
  },
  {
    "url": "/_nuxt/fa137e49471e0bbdc1ba.css",
    "revision": "76fef9861851f2ee38590539976b8fd1"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

