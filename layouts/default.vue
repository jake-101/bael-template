<template>
  <section class="container xs-border xs-text-6 md-text-5">

    <BaelHeader :blogtitle="blogtitle" :thecrumb="this.$store.state.theCrumb" :posts="blogposts" />
    <nuxt/>
    <SlideOut/>
    <BaelFooter :pagination="this.$store.state.pagination" />
  </section>
</template>
<script>
import SlideOut from "~/components/SlideOut";
import BaelFooter from "~/components/BaelFooter";
import BaelHeader from "~/components/BaelHeader";

export default {
  data() {
    return {
      email: { email: "" }
    };
  },

  methods: {
    navHeight() {
      if (process.browser) {
        var height = document.getElementById("navbar").clientHeight;

        this.$store.commit("SET_NAVHEIGHT", height - 1);
      }
    }
  },
  updated() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("default updated");
      });
    }
  },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("default mounted");
      });
    }
  },
  computed: {
    blogposts() {
      return this.$store.state.blogPosts;
    },
    blogtitle() {
      return this.$store.state.blogTitle;
    }
  },
  components: {
    SlideOut,
    BaelHeader,
    BaelFooter
  }
};
</script>


<style>
html,
body {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.main-title {
  font-size: 3rem;
  font-family: "Archivo Black", sans-serif;
  font-weight: 400;
  line-height: 1;
}
.slide-left-leave-active,
.slide-left-enter-active {
  transition: 0.3s ease-in-out;
}
.slide-left-enter {
  transform: translate3D(100%, 0, 0);
}
.slide-left-leave-to {
  transform: translate3D(-100%, 0, 0);
}
.slide-right-leave-active,
.slide-right-enter-active {
  transition: 0.3s ease-in-out;
}
.slide-right-enter {
  transform: translate3D(-100%, 0, 0);
}
.slide-right-leave-to {
  transform: translate3D(100%, 0, 0);
}
</style>
