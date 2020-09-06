<template>
  <main>
    <div
      class="full-height single xs-border-left xs-border-right"
      :style="`min-height:calc(100vh - var(--nav-height));margin-top:var(--nav-height)`"
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

    //   let post = await import("~/content/blog/posts/" + params.slug + ".json");
    //   console.log(post);

    //  await store.commit("SET_TITLE", post.title);
    //    await store.commit("SET_THUMB", post.thumbnail);
    //    await store.commit("SET_CRUMB", 'Blog');
    //  await   store.commit("SET_POSTCAT", post.category);
    //   await store.commit("paginateOff", false);
    //   return post;
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
      title: this.title + " | " + this.$store.state.siteInfo.sitename,
    };
  },

  data() {
    return {};
  },
};
</script>
