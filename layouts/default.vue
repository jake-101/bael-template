<template>
  <section class="container xs-border xs-text-5 md-text-4">
    <bael-header />
    <nuxt />
    <lazy-slide-out />
    <bael-footer :pagination="paginate" />
  </section>
</template>
<script>


export default {
  data() {
    return {
      email: { email: "" },
    };
  },
  async middleware({ store, $content }) {
    await store.dispatch('fetchInfo', $content)
  },
  computed: {
    paginate() {
      return this.$store.state.pagination;
    },
  }
};
</script>


<style>
html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.main-title {
  font-size: 3rem;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  line-height: 1;
}
.feat-wrapper {
  max-height: 55vh;
  width: 100%;
}
.slide-left-enter,
.slide-right-leave-active {
  transform: translate(50%, 0);
  opacity: 0;
  transition: all 0.25s;
}
.slide-left-leave-active,
.slide-right-enter {
  transform: translate(-50%, 0);
  opacity: 0;
  transition: all 0.25s;
}
.slide-down-enter,
.slide-up-leave-active {
  transform: translate(0, 50%);
  opacity: 1;
  transition: all 0.25s;
}
.slide-down-leave-active,
.slide-up-enter {
  transform: translate(0, -50%);
  opacity: 1;
  transition: all 0.25s;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
  transition-delay: 0.3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.post-content {
  max-width: 75ch;
}
</style>
