<template>
  <section class="container xs-text-5 md-text-4">
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
    await store.dispatch("fetchInfo", $content);
  },
};
</script>
