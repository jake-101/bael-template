<template>
  <main>
    <div
      class="full-height single"
      style="min-height:calc(85vh - var(--nav-height));margin-top:var(--nav-height)"
    >
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <lazy-featured-image
            v-if="page.thumbnail"
            :title="page.title"
            :thumbnail="page.thumbnail"
          />
          <h1 class="xs-py3 main-title">{{page.title}}</h1>
          <div class="xs-py3 post-content text-gray">
            <nuxt-content :document="page" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<script>
export default {
  async asyncData({ $content, error, params }) {
    const page = await $content("page", params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      page,
    };
  },
  head() {
    return {
      title: this.page.title + " | " + this.$store.state.info.sitename,
      meta: [
        // { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.page.title },
        // { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.page.title,
        },
        // { hid: 'twitter:description', name: 'twitter:description', content: this.page.description }
      ],
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", this.page);
  },
  transition(to, from) {
    if (!from) {
      return "slide-left";
    } else {
      return "slide-right";
    }
  },
};
</script>
