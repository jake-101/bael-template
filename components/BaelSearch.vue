<template>
  <div class="searchwrapper xs-relative">
    <input
      class="search xs-flex-grow-1 text-input xs-border-none xs-fit xs-text-5 md-text-4 xs-m0 xs-p0"
      type="search"
      v-model="query"
      autocomplete="off"
    />
    <img class="xs-absolute searchicon xs-r0 sm-l0" src="~/assets/bx-search.svg" />
    <smooth-reflow tag="ul" class="xs-absolute results">
      <li
        @click="onClick(article.path)"
        class="xs-border xs-p2 cursor-pointer"
        v-for="article of articles"
        :key="article.path"
      >{{article.title}}</li>
    </smooth-reflow>
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
  top: 1.4rem;
  z-index: 9999;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
  background: #fff;
}
.searchicon {
  height: 18px;
  top: 0px;
}
.results li {
  display: block;
  width: 100%;
}
.results li:hover {
  background: var(--hover-bg);
}
.results li:active {
  background: var(--active-bg);
}
@media only screen and (max-width: 40rem) {
  input.search {
    text-indent: 0;
  }
}
</style>