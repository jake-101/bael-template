<template>

  <BaelGrid :allitems="findCatPosts"></BaelGrid>
</template>

<script>
import BaelGrid from '~/components/BaelGrid'
export default {
    async asyncData({ params, app, payload, route, store }) {
    let post = await import("~/content/categories/posts/" + params.slug + ".json");
    console.log(post);
    await store.commit("SET_TITLE", post.title);
    await store.commit("SET_CRUMB", 'Categories');
    return post;
  },
  head() {
    return {
      title: this.title + " | " + this.$store.state.siteInfo.sitename
    };
  },
  components: {BaelGrid},
     transition (to, from) {
    if (!from) return 'slide-right'
    return +to.query.page > +from.query.page ? 'slide-right' : 'slide-left'
  },
  data() {
    return {};
  },
  methods: {
      theSlug() {
      return this.$route.params.slug
    },
  },
   
  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts;
    },
  

    findCatPosts() {
var posts = this.allBlogPosts;
var title = this.title
      return posts.filter(function(obj) {
        return obj.category == title
      });
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
