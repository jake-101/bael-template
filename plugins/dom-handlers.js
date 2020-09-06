
// window resize handler
export const resizeHandler = store => {
    let root = document.documentElement;

    store.commit('browser/SET_WIN_WIDTH', window.innerWidth)
    store.commit('browser/SET_WIN_HEIGHT', window.innerHeight)
    const navbar = document.getElementById('navbar')
    const navHeight = navbar.clientHeight;
    root.style.setProperty('--nav-height', navHeight - 1 + "px");

    store.commit('browser/SET_NAVHEIGHT', navHeight - 1)

    const docHeight = Math.max(
        document.body.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.clientHeight,
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight
    )
    store.commit('browser/SET_DOC_HEIGHT', docHeight)
}

