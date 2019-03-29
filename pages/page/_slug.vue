<template>
  <main>
    <div class="full-height single xs-border-left xs-border-right" :style="`min-height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`">
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <div v-if="thumbnail" class="fill-gray-lighter feat-wrapper"><transition appear name="fade"><img class="featured-image" :src="thumbnail" :alt="title"></transition></div>
          <h1 class="xs-py3 main-title">{{title}}</h1>
          <div class="xs-py3 post-content text-gray">
            <div v-html="$md.render(body)"></div>
          </div>
        </div>
      </div>

    </div>
  </main>
</template>



<script>
import MdWrapper from "~/components/MdWrapper";

export default {
  async asyncData({ params, app, payload, route, store }) {
    let post = await import("~/content/page/posts/" + params.slug + ".json");
    console.log(post);
    await store.commit("SET_TITLE", post.title);
    
    return post;
  },
     transition (to, from) {
    if (!from) { return 'slide-left' } else {return 'slide-right'}
  },
  head() {
    return {
      title: this.title + " | " + this.$store.state.siteInfo.sitename
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
    }
  },
  updated() {
    if (process.browser) {
      this.$nextTick(() => {
           this.$store.commit("paginateOff", false);

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
                   this.$store.commit("paginateOff", false);

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
    allBlogPosts() {
      return this.$store.state.blogPosts;
    },
    navbarheight() {
      return this.$store.state.navheight;
    }
  },
  components: {
    MdWrapper
  }
};
</script>
