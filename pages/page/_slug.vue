<template>
  <main>
    <div
      class="full-height single xs-border-left xs-border-right"
      style="min-height:calc(100vh - var(--nav-height));margin-top:var(--nav-height)"
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

    // let post = await import("~/content/page/posts/" + params.slug + ".json");
    // console.log(post);
    // await store.commit("SET_TITLE", post.title);

    // return post;
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
