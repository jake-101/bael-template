<template>
  <main>
    <div
      class="full-height single xs-border-left xs-border-right"
      :style="`min-height:calc(100vh - var(--nav-height));margin-top:var(--nav-height)`"
    >
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <div class="feat-wrapper" v-if="post.thumbnail">
            <transition appear name="fade">
              <img class="featured-image" :src="post.thumbnail" :alt="post.title" />
            </transition>
          </div>
          <h1 class="xs-py3 main-title">{{post.title}}</h1>
          <no-ssr>
            <div class="xs-mt-5 bold">
              <ul class="list-unstyled xs-flex xs-flex-align-center">
                <li class="xs-inline-block xs-mr1" v-if="this.$store.state.theCategory">
                  <div class="tag fill-gray-darker xs-border">
                    <nuxt-link
                      :to="`/category/${this.$store.state.theCategory.toLowerCase()}`"
                      class="tag__link text-white"
                    >{{this.$store.state.theCategory}}</nuxt-link>
                  </div>
                </li>
                <li class="xs-inline-block">{{ date }}</li>
              </ul>
            </div>
          </no-ssr>
          <div class="xs-py3 post-content text-gray-lighter">
            <nuxt-content :document="post" />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<script>
import MdWrapper from "~/components/MdWrapper";

export default {
  async asyncData({ $content, params, app, payload, route, store }) {
    const post = await $content("blog", params.slug).fetch();

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
  methods: {
    onResize(event) {
      this.navHeight();
      console.log(this.$store.state.navheight);
      console.log("slug resize");
    },
    navHeight() {
      var height = document.getElementById("navbar").clientHeight;
      this.$store.commit("SET_NAVHEIGHT", height);
    },
  },
  updated() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("slug updated");
      });
    }
  },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        window.addEventListener("resize", this.onResize);
        console.log(this.$store.state.navheight);
        console.log("slug mounted");
      });
    }
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  },

  computed: {
    theThumb() {
      return this.$store.state.theThumbnail;
    },
    allBlogPosts() {
      return this.$store.state.blogPosts;
    },

  },
  components: {
    MdWrapper,
  },
};
</script>
