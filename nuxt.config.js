const siteInfo = require('./content/setup/info.json');
const pkginfo = require('./package.json')
const webpack = require('webpack')

module.exports = {
  target: 'static',
  components: true,
  mode: "universal",
  /*
  ** Headers of the page
  */
  transition: { mode: "in-out" },
  env: {
    API_URL: process.env.API_URL,
    BAEL_VERSION: pkginfo.version
  },
  head: {
    title: siteInfo.sitename,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: siteInfo.sitedescription }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@200;400;600;700;800&display=swap' }
    ]
  },
  css: ["@/assets/grid.css", "@/assets/content.scss", "bf-solid/dist/solid.latest.css"],
  // icon: {
  //   iconSrc: `${siteInfo.siteicon}`
  //  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  modules: ['@nuxt/content', '@nuxtjs/pwa', '@nuxtjs/axios'],
  content: {
    fullTextSearchFields: ['title', 'description', 'category']
  },
  manifest: {
    name: siteInfo.sitename,
    short_name: siteInfo.sitename,
    description: siteInfo.sitedescription,
    lang: 'en'
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: '/images/uploads/.*',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'image-cache',
          cacheExpiration: {
            maxEntries: 100,
            maxAgeSeconds: 86400
          }
        }
      }
    ]
  },

  /*
  ** Route config for pre-rendering
  */
  router: {
    scrollBehavior: function (to, from, savedPosition) {
      return { x: 0, y: 0 }
    },
    middleware: ['title']
  },
  plugins: [
    {
      src: "~/plugins/browser",
      mode: 'client'
    }, {
      src: "~/plugins/moment",
      mode: 'client'
    }, {
      src: "~/plugins/lazyload",
      mode: 'client'
    }
  ],
  /*
  ** Build configuration
  */

  build: {
    extractCSS: false,
    html: {
      minify: {
       minifyCSS: false,
       minifyJS: false
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        _get: 'lodash/get',
      })
    ],
    /** Uncomment this if you need to use the full Vue build */
    // extend(config) {
    //     config.resolve.alias['vue'] = 'vue/dist/vue.common'
    // }
  },
}


