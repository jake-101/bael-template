<template>
  <div class="searchwrapper xs-relative">
    <input
      class="search xs-flex-grow-1 text-input xs-border-none xs-fit xs-text-5 md-text-4 xs-m0 xs-p0"
      type="search"
      v-model="query"
      autocomplete="off"
    />
    <img class="xs-absolute searchicon xs-r0 sm-l0" src="~/assets/bx-search.svg" />
    <ul class="xs-absolute results">
      <li
        @click="onClick(article.path)"
        class="xs-border xs-p2 fill-white cursor-pointer"
        v-for="article of articles"
        :key="article.path"
      >{{article.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: "",
      articles: [],
    };
  },
  methods: {
    onClick(slug) {
      this.query = null;
      this.$router.push(slug);
    },
  },
  watch: {
    async query(query) {
      if (!query) {
        this.articles = [];
        return;
      }

      this.articles = await this.$content("blog")
        .only(["title", "path"])
        .sortBy("createdAt", "desc")
        .limit(12)
        .search(query)
        .fetch();
    },
  },
};
</script>
<style>
.searchwrapper {
  width: 100%;
}
input.search {
  width: 100%;
  text-indent: 22px;
}
.results {
  top: 1.35rem;
}
.searchicon {
  height: 18px;
  top: 0px;
}
.results a {
  display: block;
  width: 100%;
}
@media only screen and (max-width: 40rem) {
  input.search {
    text-indent: 0;
  }
}
</style>