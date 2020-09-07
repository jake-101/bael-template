<template>
  <section class="container xs-border xs-text-5 md-text-4">
    <bael-header />
    <nuxt />
    <lazy-slide-out />
    <bael-footer />
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
};
</script>


<style>
html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: "Inter",-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    letter-spacing: -.3px;
    text-rendering: optimizeLegibility;

}
.main-title {
  font-size: 3rem;
  font-size: clamp(2.75rem, 4vw, 4.5rem);
  font-family: "Inter", sans-serif;
  font-weight: 600;
  letter-spacing: calc(-.2rem + -.05vw);
  line-height: 1.1;
  max-width: 48rem;
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
