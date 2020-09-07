export default function ({ store }) {
  store.commit('SET_CURRENT', {})
  store.commit('SET_PAGINATION', {})
  if (store.state.menuIsActive === !false) {
    console.log('menu')


    store.commit('setMenuState', false)
  }

}