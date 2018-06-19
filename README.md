# nuxt-netlify-cms-starter-template

> Nuxt.js + Netlify CMS project

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

## Edit content

Access `yourwebsite.com/admin`, e.g. `localhost:3000/admin`.

## Manage dynamic routes

When you use Netlify CMS' `folder` type, you actually create dynamic routes. For example, when creating a blog,
you render different content files with the same template. And for the blog to know which content to render,
it looks at the url and gets the specific content file. That's a dynamic route.

So If you create a `folder` type with Netlify CMS, add the folder as glob to the `dynamicRoutes` variable
in the `nuxt.config.js`.
