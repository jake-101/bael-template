var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/blog': 'blog/posts/*.json'
});


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Bael',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'robots', content: 'noindex,nofollow' },
      { hid: 'description', name: 'description', content: 'A fashionable open source template using netlify cms and nuxt.js.' }

    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: ["~/assets/grid.css","bf-solid/dist/solid.2.10.6.css"],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Route config for pre-rendering
  */
  generate: {
    routes: dynamicRoutes
  },
  plugins: [{ssr: false, src:'~/plugins/vuefuse'}],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */

  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
