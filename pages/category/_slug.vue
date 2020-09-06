<template>
  <bael-grid :posts="posts" />
</template>

<script>
export default {
  async asyncData({ $content, params, store, error }) {
    const category = await $content("category", params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    const posts = await $content("blog")
      .sortBy("createdAt", "desc")
      .where({ category: category.title })
      .fetch();

    return {
      category,
      posts,
    };
  },
  head() {
    return {
      title: this.category.title + " | " + this.$store.state.info.sitename,
    };
  },
  transition(to, from) {
    if (!from) return "slide-right";
    return +to.query.page > +from.query.page ? "slide-right" : "slide-left";
  },
  mounted() {
    this.$store.commit("SET_CURRENT", this.category);
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
