<template>
  <main>
    <div class="full-height single xs-border-left xs-border-right" :style="`min-height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`">
      <div class="xs-mt2 xs-p2 bcg-item">
        <div class="item xs-block xs-full-height">
          <div v-show="theThumb"><img class="featured-image fill-gray-lighter" :src="theThumb" :alt="title"></div>
          <h1 class="xs-py3 main-title">{{title}}</h1>
          <no-ssr>
            <div class="xs-mt-5 bold">
            <ul class="list-unstyled xs-flex xs-flex-align-center">
             <li class="xs-inline-block xs-mr1" v-if="this.$store.state.theCategory"><div class="tag fill-gray-darker xs-border">
  <nuxt-link :to="`/category/${this.$store.state.theCategory.toLowerCase()}`" class="tag__link text-white">{{this.$store.state.theCategory}}</nuxt-link>
</div></li> 
<li class="xs-inline-block">{{ date }}</li>
              </ul> 
             </div>
          </no-ssr>
          <div class="xs-py3 post-content text-gray-lighter">
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
    let post = await import("~/content/blog/posts/" + params.slug + ".json");
    console.log(post);
    await store.commit("SET_THUMB", "");
    await store.commit("SET_TITLE", post.title);
    await store.commit("SET_THUMB", post.thumbnail);
    await store.commit("SET_CRUMB", 'Blog');
    await store.commit("SET_POSTCAT", post.category);
    return post;
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
    navbarheight() {
      return this.$store.state.navheight;
    }
  },
  components: {
    MdWrapper
  }
};
</script>

<style>
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 1rem;
}

.featured-image {
  max-height: 55vh;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
}
.container .single .post-content {
  line-height: 1.618;
  color: #222;
}
.single .post-content img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ccc;
  padding: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
}
.single .post-content p {
  margin-bottom: 0.5rem;
}
.single .post-content ul,
.single .post-content ol {
  margin-bottom: 1rem;
}
.post-content h1,
.post-content h2,
.post-content h3,
.post-content h4,
.post-content h5,
.post-content h6 {
  color: #000;
  margin-bottom: 0.5rem;
}
.single {
  max-width: 1200px;
  margin: 0 auto;
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
  .main-title {
    font-size: 2rem;
  }
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
