import { resizeHandler, scrollHandler } from '~/plugins/dom-handlers'
import Intersect from '~/directives/intersect'
import _throttle from 'lodash/throttle'
import Vue from 'vue'

// plugin
export default async ({ store, route }, inject) => {

    require('intersection-observer')
    require('string.prototype.includes')

    Vue.directive('intersect', Intersect)

    // setup dom listeners
    // ~16ms is 60fps
    window.addEventListener(
        'resize',
        _throttle(() => resizeHandler(store), 16)
    )
    // window.addEventListener(
    //     'scroll',
    //     _throttle(() => scrollHandler(store), 16)
    // )

    // kick
    // scrollHandler(store)
    resizeHandler(store)


}
