<template>
  <main>
    <div
      class="full-height single"
      :style="`min-height:calc(85vh - var(--nav-height));margin-top:var(--nav-height)`"
    >
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <lazy-featured-image
            v-if="post.thumbnail"
            :title="post.title"
            :thumbnail="post.thumbnail"
          />

          <h1 class="xs-py3 main-title">{{post.title}}</h1>
          <div class="xs-mt-5 bold">
            <ul class="list-unstyled xs-flex xs-flex-align-center">
              <li class="xs-inline-block xs-mr1" v-if="post.category">
                <div class="tag fill-gray-darker xs-border">
                  <nuxt-link
                    :to="`/category/${post.category.toLowerCase()}`"
                    class="tag__link text-white"
                  >{{post.category}}</nuxt-link>
                </div>
              </li>
              <li class="xs-inline-block">{{ post.date }}</li>
            </ul>
          </div>
          <div class="xs-py3 post-content text-gray-lighter">
            <nuxt-content :document="post" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<script>
export default {
  async asyncData({ $content, params, error }) {
    const post = await $content("blog", params.slug)
      .fetch()
      .catch((err) => {
        error({ statusCode: 404, message: "Page not found" });
      });

    return {
      post,
    };
  },
  transition(to, from) {
    if (!from) {
      return "slide-left";
    } else {
      return "slide-right";
    }
  },
  head() {
    return {
      title: this.post.title + " | " + this.$store.state.info.sitename,
      meta: [
        // { hid: 'description', name: 'description', content: this.article.description },
        // Open Graph
        { hid: "og:title", property: "og:title", content: this.post.title },
        // { hid: 'og:description', property: 'og:description', content: this.article.description },
        // Twitter Card
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: this.post.title,
        },
        // { hid: 'twitter:description', name: 'twitter:description', content: this.page.description }
      ],
    };
  },
  mounted() {
    this.$store.commit("SET_CURRENT", this.post);
  },
};
</script>
