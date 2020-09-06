<template>
  <nav ref="navBar" :data-nav="pagetitle" id="navbar" class="sm-border-bottom">
    <div class="r">
      <div class="c-4 xs-text-left xs-p2 sm-border-right">
        <div class="item">
          <nuxt-link class="sitename" to="/" exact>{{$store.state.info.sitename}}</nuxt-link>
        </div>
      </div>

      <div
        class="c-4 xs-border-top xs-border-bottom sm-border-top-none sm-border-bottom-none sm-border-left sm-border-right xs-p2"
      >
        <div class="item xs-flex">
          <lazy-bael-search />
        </div>
      </div>
      <div
        v-if="pagetitle"
        style="z-index:55;"
        class="c-12 xs-border-top xs-border-bottom xs-p2 xs-text-6 titlebar"
      >
        <div class="item">
          <nuxt-link to="/" exact>Home</nuxt-link>
          <span v-show="crumb">
            &nbsp;
            <span class="text-gray-lightest">></span>
            &nbsp; {{thecrumb}}
          </span> &nbsp;
          <span class="text-gray-lightest">></span>
          &nbsp; {{pagetitle}}
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  props: ["blogtitle", "posts", "thecrumb"],
  data() {
    return {};
  },

  computed: {
    pagetitle() {
      return this.$store.state.current.title;
    },

    crumb() {
      return this.$store.state.theCrumb;
    },
  },
};
</script>
<style>
#navbar {
  z-index: 999;
}
.titlebar .item {
  overflow-x: none;
}
.results {
  padding-left: 0;
  transform: translateY(17px);
  width: 30vw;
}
.results li {
  list-style-type: none;
  margin-left: 0;
}
nav {
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  right: 0;
}
.sitename {
  color: #000;
  font-family: "Archivo Black", sans-serif;
  text-transform: uppercase;
  font-weight: 400;
  font-size: 18px;
}
@media only screen and (max-width: 40rem) {
  .results {
    width: 94vw;
  }
}
</style>