importScripts('/_nuxt/workbox.dev.c21f51f2.js')

const workboxSW = new self.WorkboxSW({
  "cacheId": "bael-cms-template",
  "clientsClaim": true,
  "directoryIndex": "/"
})

workboxSW.precache([
  {
    "url": "/_nuxt/03bfbac93cf29dfa7b30.js",
    "revision": "09154b6befafc7f01837c53d1a31df85"
  },
  {
    "url": "/_nuxt/098c8560743a94312b82.js",
    "revision": "7526f4c2229dbeaeeb3108ef5dd373e7"
  },
  {
    "url": "/_nuxt/12de1b50a49f81408dcf.css",
    "revision": "cfef01e8b2f16b0f478ba50c66f231b2"
  },
  {
    "url": "/_nuxt/26f5da7e2cd150912eca.js",
    "revision": "7163e2c49e35177cce34203e1a4c8398"
  },
  {
    "url": "/_nuxt/471f1cc4719e779c1781.css",
    "revision": "750e44d4546b4f0905579c6885ab58d6"
  },
  {
    "url": "/_nuxt/64ffca04ca9b8a255502.js",
    "revision": "9417b906f573cd28b17fe15f9adda831"
  },
  {
    "url": "/_nuxt/7e16c2d1904fe8008c6e.css",
    "revision": "76fef9861851f2ee38590539976b8fd1"
  },
  {
    "url": "/_nuxt/86ad3cdcc40313620480.css",
    "revision": "76fef9861851f2ee38590539976b8fd1"
  },
  {
    "url": "/_nuxt/9ec57e4dabcf6aeed5d0.js",
    "revision": "36359da7227f3eabe1828c322eb1dec5"
  },
  {
    "url": "/_nuxt/a7b3301561ba4f3cc5f9.css",
    "revision": "0dfcd8f1a9bbca12d3cb32d12980a703"
  },
  {
    "url": "/_nuxt/e408c73ecbc745fdce85.js",
    "revision": "24e2649090e8ebcd51e6ab71906e0140"
  }
])


workboxSW.router.registerRoute(new RegExp('/_nuxt/.*'), workboxSW.strategies.cacheFirst({}), 'GET')

workboxSW.router.registerRoute(new RegExp('/.*'), workboxSW.strategies.networkFirst({}), 'GET')

