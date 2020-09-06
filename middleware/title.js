export default function ({ store }) {
  store.commit('SET_CURRENT', {})
  store.commit('SET_RESULTS', null)
  store.commit("paginateOn", false);
  if (store.state.menuIsActive === !false) {
    console.log('menu')


    store.commit('setMenuState', false)
  }

}