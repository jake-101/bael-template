import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const createStore = () =>
  new Vuex.Store({
    state: {
      menuIsActive: false,
      menuInitial: true,
      blogPosts: []
    },
    actions: {
      async getBlogPosts ({ state, commit }) {
        const context = require.context('~/content/blog/posts/', false, /\.json$/);

        const searchposts = context.keys().map(key => ({
          ...context(key),
          _path: `/blog/${key.replace('.json', '').replace('./', '')}`
        }));
    
         commit('SET_POSTS', searchposts)
      
      }
    },
    mutations: {
      SET_POSTS(state, data) {
        state.blogPosts = data
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
