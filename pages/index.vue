<template>
  <BaelGrid :items="getGridItems" :allitems="allBlogPosts"></BaelGrid>
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
export default {
  async asyncData({ params, app, payload, route, store }) {
    await store.dispatch("setGridNumPosts");
    await store.dispatch("setGridNumPosts");
  },
  name: "Index",
  components: { BaelGrid },
  data() {
    return {};
  },
  methods: {},

  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts;
    },
    getGridItems() {
      return this.allBlogPosts.slice(
        this.$store.state.gridOffset,
        this.$store.state.gridNum
      );
    }
  }
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
