import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      menuIsActive: false,
      menuInitial: true,
      blogPosts: [],
      siteInfo: [],
      connect: []
    },
    actions: {
      async nuxtServerInit({ dispatch }) {
        await dispatch('getSiteInfo')
        await dispatch('getBlogPosts')
      },
      async getBlogPosts ({ state, commit }) {
        const context = await require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = await context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }));
    
         commit('SET_POSTS', searchposts)
      
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
      SET_INFO(state, data) {
        state.siteInfo = data
      },
      SET_CONNECT(state, data) {
        state.connect = data
      },

      toggleMenuState(state) {
        state.menuIsActive = !state.menuIsActive
      },
      toggleMenuInitial(state) {
        state.menuInitial = !state.menuInitial
      }

    }
  })

export default createStore
