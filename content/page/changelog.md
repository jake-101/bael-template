---
title: Changelog
date: 2019-03-28T21:15:57.000Z
thumbnail: /images/uploads/changelog.jpg
---

## 1.0 beta - September 2020

#### New Features

* Upgraded to Nuxt 2.14.4 and [@nuxt/content](https://content.nuxtjs.org/) module. Static deployment, automatically imported components, and use of new fetch hook.
* Responsive text using root font size inspired by [Every Layout](https://every-layout.dev/rudiments/units/).
* Much easier to read and better functioning code
* Improved Component Structure
* Use of CSS variables instead of JS/CSS workarounds
* Site search engine now uses built-in Loki.js DB from @nuxt/content and no longer uses Fuse.js
* Improvements to content area styling
* [Inter](https://rsms.me/inter) is now the default font
* Content can be edited by using @nuxt/content's built-in editor in dev env and not use NetlifyCMS at all.
* Intersection Observer mix-in available for use + polyfill
* Full-width featured image with no margins

#### Breaking Changes

* Blog and Page content are no longer JSON files and have been converted into Markdown.

## 0.2.1 - May 24, 2018

#### New Features

* Added Full Page "Alt" Layout (In the /admin panel, go to Setup>Site Info and set 'Full Page Alt Layout' to true to turn it on.) Check out the [example blog](https://bael-template-alt-layout.netlify.com/) to see how it looks.

#### Fixes

* Upgrade to Nuxt 2.7.1
* Pagination fix
* Removed Webpack Bundle Analyzer due to security vulnerability

- - -

## 0.1.3 - March 28, 2019

#### Fixes

* Upgrade to [Nuxt 2.5.1](https://github.com/nuxt/nuxt.js/releases/tag/v2.5.1)
* Upgrade to [NetlifyCMS 2.0](https://www.netlifycms.org/docs/update-the-cms-version/)
* Removed hard coded Yarn version requirement
* Added API_URL build var to netlify.toml to fix issue [with help from BRS999 ](https://github.com/jake-101/bael-template/issues/2)
* Change Node 10 requirement to 9
* Changed npm in package.json to use yarn
* Updated packages

- - -

## 0.1.2 - July 16, 2018

#### New Features

* Categories
* Pagination
* Loading State w/ SVG spinner
* Show Icon in Menu

#### Fixes

* Breadcrumb flexbox fix
* Upgraded dependencies
* Compressed included images
* Blockquote appearance
* Paragraph margin-bottom

- - -

## 0.1.1 - Initial Version

* CSS Grid based layout
* Responsive design
* Featured Image
* Blog collection type
* Page collection type
* Client-side fuzzy search
* Newsletter signup Netlify Function

- - -

## Roadmap

* Different sorting options  
* More styling settings  
* Deploy with Vercel   
* More CSS Variables  
* Dark Mode  
* RSS Feed  
* Share buttons  
* New starter content for blank template
* and more?