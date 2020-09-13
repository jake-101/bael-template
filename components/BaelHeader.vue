<template>
  <nav ref="navBar" :data-nav="`${pagetitle}`" id="navbar">
    <div class="r xs-border-bottom">
      <div class="c-4 xs-text-left xs-p2 sm-border-right">
        <div class="item">
          <nuxt-link class="sitename" to="/" exact>{{$store.state.info.sitename}}</nuxt-link>
        </div>
      </div>

      <div
        class="c-4 xs-border-top xs-border-bottom sm-border-bottom-none sm-border-top-none sm-border-left-none sm-border-right xs-p2"
      >
        <div class="item xs-flex">
          <lazy-bael-search />
        </div>
      </div>
      <div v-if="pagetitle" style="z-index:55;" class="c-12 sm-border-top xs-p2 xs-text-6 titlebar">
        <div class="item">
          <nuxt-link to="/" exact>Home</nuxt-link>
          <span v-if="path">
            &nbsp;
            <span class="text-gray-lightest">></span>
            &nbsp; {{path}}
          </span> &nbsp;
          <span class="text-gray-lightest">></span>
          &nbsp; {{pagetitle}}
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import _capitalize from "lodash/capitalize";
export default {
  data() {
    return {};
  },
  computed: {
    pagetitle() {
      return this.$store.state.current.title;
    },

    path() {
      const split = _get(this.$store, "state.current.dir").split("/");

      return split.length && split[1] !== "page" ? _capitalize(split[1]) : null;
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
  font-family: "Inter", sans-serif;
  text-transform: uppercase;
  font-weight: 800;
  font-size: 18px;
}
@media only screen and (max-width: 40rem) {
  .results {
    width: 94vw;
  }
}
</style>