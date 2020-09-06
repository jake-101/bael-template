<template>
  <component :is="getLayout" :posts="blogPosts"></component>
</template>

<script>
import BaelGrid from "~/components/BaelGrid";
import FullGrid from "~/components/FullGrid";
export default {
  async asyncData({ $content, params, error }) {
    const blogPosts = await $content("blog")
      .sortBy("createdAt", "desc")
      .only(["title", "path"])
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      blogPosts,
    };
  },
  watchQuery: ["page"],

  transition(to, from) {
    if (!from) return "fade";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  name: "Index",
  components: { BaelGrid, FullGrid },
  data() {
    return {};
  },
  methods: {},

  computed: {
    getLayout() {
      if (this.$store.state.siteInfo.altlayout == false) {
        return "BaelGrid";
      } else if (this.$store.state.siteInfo.altlayout == true) {
        return "FullGrid";
      }
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
