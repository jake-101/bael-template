<template>
  <bael-grid :posts="categories" />
</template>

<script>
export default {
  watchQuery: ["page"],

  async asyncData({ params, app, payload, route, store }) {
    await store.commit("SET_TITLE", "Categories");
  },
  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  data() {
    return {};
  },
  head() {
    return {
      title: "Categories | " + this.$store.state.info.sitename,
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", {
      title: "Categories",
      dir: ''
    });
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    },
  },
};
</script>

<style>
.browse a {
  width: 100%;
}
.search:focus {
  outline: none;
}
.footer__heading {
  text-transform: uppercase;
}
nav .r {
  grid-gap: 0;
}
.r.full-height {
  grid-gap: 0;
}
@media only screen and (max-width: 40rem) {
  .xs-collapse {
    visibility: hidden;
    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;
  }
  .xs-visible {
    visibility: visible;
  }
}
</style>
