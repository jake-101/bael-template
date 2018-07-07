import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      menuIsActive: false,
      menuInitial: true,
      blogPosts: [],
      allPages: [],
      navheight: 60,
      blogTitle: '',
      siteInfo: [],
      connect: [],
      results: [],
      menuIsActive: false,
      menuInitial: true,
    },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('getSiteInfo')
        await dispatch('getBlogPosts')
        await dispatch('getPages')
      },
      async getBlogPosts ({ state, commit }) {
        const context = await require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = await context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }));

       
    
         commit('SET_POSTS', searchposts)

      },
      async getPages ({ state, commit }) {


        const context = await require.context('~/content/page/posts/', false, /\.json$/);

        const pages = await context.keys().map(key => ({
          ...context(key),
          _path: `/page/${key.replace('.json', '').replace('./', '')}`
        }));
    
         commit('SET_PAGES', pages)

      },
       getSiteInfo ({ state, commit }) {
        const info = require('~/content/setup/info.json');
        const connect = require('~/content/setup/connect.json');
        const context = require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }));

    
    
         commit('SET_POSTS', searchposts)
         commit('SET_INFO', info)
         commit('SET_CONNECT', connect)
      
      }
    },
    mutations: {
      SET_POSTS(state, data) {
        state.blogPosts = data
      },
      SET_PAGES(state, data) {
        state.allPages = data
      },
      SET_TITLE(state, data) {
        state.blogTitle = data
      },
      SET_NAVHEIGHT(state, data) {
        state.navheight = data
      },
      SET_INFO(state, data) {
        state.siteInfo = data
      },
      SET_CONNECT(state, data) {
        state.connect = data
      },
      SET_RESULTS(state, data) {
        state.results = data
      },

      setMenuState(state, menuIsActive) {
        state.menuIsActive = menuIsActive
      },
      toggleMenuState(state) {
        state.menuIsActive = !state.menuIsActive
      },

    }
  })

export default createStore
