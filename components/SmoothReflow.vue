<template>
    <component :is="tag">
        <slot/>
    </component>
</template>

<script>
import smoothReflow from 'vue-smooth-reflow'
export default {
    name: 'SmoothReflow',
    mixins: [smoothReflow],
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        options: Object,
    },
     mounted () {
         this.$smoothReflow(this.options)

    },
}
</script>