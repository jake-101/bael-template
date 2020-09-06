import Vue from 'vue'

export const state = () => {
    return {
        fontsLoading: true,
        fontsLoaded: false,
        fontsFailed: false,
        docHeight: 675,
        navHeight: 0,
        winHeight: 1080,
        winWidth: 1920,
        sTop: 0,
        referredFrom: null,
        mouseX: 0,
        mouseY: 0,
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
    SET_SCROLL_TOP: (state, sTop) => {
        state.sTop = sTop
    },
    SET_DOC_HEIGHT: (state, height) => {
        state.docHeight = height
    },
    WINDOW_LOADED: (state) => {
        state.windowLoading = false
    },
    SET_REFERRED: (state, ref) => {
        state.referredFrom = ref
    },
    SET_RELATIVE_MOUSE_POS: (state, { x, y }) => {
        state.mouseX = x
        state.mouseY = y
    },
}

export const actions = {

}

export const getters = {
    breakpoint(state) {
        if (state.winWidth <= 750) return 'mobile'
        return 'desktop'
    },
}
