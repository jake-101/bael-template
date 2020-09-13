
export const state = () => {
    return {
        docHeight: 675,
        navHeight: 54,
        winHeight: 1080,
        winWidth: 1920
        }
}

export const mutations = {
    SET_WIN_HEIGHT: (state, height) => {
        state.winHeight = height
    },
    SET_NAVHEIGHT: (state, height) => {
        state.navHeight = height
    },
    SET_WIN_WIDTH: (state, width) => {
        state.winWidth = width
    },
    SET_DOC_HEIGHT: (state, height) => {
        state.docHeight = height
    }
}

export const actions = {

}

export const getters = {
    breakpoint(state) {
        if (state.winWidth <= 750) return 'mobile'
        return 'desktop'
    },
}
