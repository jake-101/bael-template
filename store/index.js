
import Vuex from 'vuex'
import Vue from 'vue'

export const state = () => {
  return {
    menuIsActive: false,
    menuInitial: true,
    info: {},
    current: {},
    categories: [],
    // blogPosts: [],
    // allPages: [],
    // navheight: 60,
    // blogTitle: '',
    // siteInfo: [],
    // connect: [],
    // allTags: [],
    // gridItems: [],
    // gridNumPosts: '11',
    // gridNumCats: '11',
    // gridOffset: '0',
    // theThumbnail: '',
    // theCategory: '',
    // theCrumb: '',
    // allCats: [],
    // results: [],
    // resultsnum: [],
    // pagination: false,
    settings: {},

  }
}
export const actions = {

  async fetchInfo({ commit }, $content) {
    try {
      const info = await $content("setup", "info").fetch();
      const connect = await $content("setup", "connect").fetch();
      const categories = await $content("category").fetch();
      commit('SET_INFO', info)
      commit('SET_CONNECT', connect.connectlinks)
      commit('SET_CATEGORIES', categories)
    } catch (e) {
      const error = 'Initial Setup Error: ' + e.message + e
      console.warning(error)
      commit('SET_ERROR', error);
    }
  }


  // setGridNumPosts({ state, commit }) {
  //   if (state.blogPosts > 12) {
  //     this.$store.commit("SET_GRIDNUMPOSTS", 12);
  //   }
  // },
  // setGridNumCats({ state, commit }) {
  //   if (state.allCats > 12) {
  //     this.$store.commit("SET_GRIDNUMCATS", 12);
  //   }
  // },


}

export const mutations = {
  // NEW MUTATIONS
  SET_INFO(state, info) {
    state.info = info
  },
  SET_ERROR(state, error) {
    state.info = error
  },
  SET_CONNECT(state, data) {
    state.connect = data
  },
  SET_CURRENT(state, data) {
   state.current = data
  },
  SET_CATEGORIES(state, data) {
    state.categories = data
  },
  // OLD MUTATIONS
  SET_POSTS(state, data) {
    state.blogPosts = data
  },
  SET_PAGES(state, data) {
    state.allPages = data
  },

  SET_CRUMB(state, data) {
    state.theCrumb = data
  },
  SET_GRIDITEMS(state, data) {
    state.gridItems = data
  },
  SET_GRIDNUMPOSTS(state, data) {
    state.gridNumPosts = data
  },
  SET_GRIDNUMCATS(state, data) {
    state.gridNumCats = data
  },
  SET_GRIDOFFSET(state, data) {
    state.gridOffset = data
  },
  SET_POSTCAT(state, data) {
    state.theCategory = data
  },
  SET_TAGS(state, data) {
    state.allTags = data
  },
  SET_THUMB(state, data) {
    state.theThumbnail = data
  },
  SET_TITLE(state, data) {
    state.blogTitle = data
  },
  SET_NAVHEIGHT(state, data) {
    state.navheight = data
  },
  // SET_INFO(state, data) {
  //   state.siteInfo = data
  // },

  SET_RESULTS(state, data) {
    state.results = data
  },
  paginateOn(state, data) {
    state.pagination = data
  },
  paginateOff(state, data) {
    state.pagination = data
  },
  resultsLength(state, data) {
    state.resultsnum = data
  },
  setMenuState(state, menuIsActive) {
    state.menuIsActive = menuIsActive
  },

  toggleMenuState(state) {
    state.menuIsActive = !state.menuIsActive
  },

}




