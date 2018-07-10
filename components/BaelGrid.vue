<template>
    <div>
    <div v-if="items[0]" class="r full-height browse" :style="`height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`">
      <div v-for="p in items" :key="p.slug" class="xs-border xs-p2 bcg-item">
        <div class="item xs-block xs-full-height xs-flex">
          <nuxt-link class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center" :to="p._path">
            {{p.title}}
          </nuxt-link>
        </div>
      </div>
   
      <!-- <div class="xs-border xs-p2 bcg-item"></div> -->

    </div>
   <div v-else class="r full-height browse">
       <div class="xs-p2 c-100 xs-flex xs-flex-align-center xs-flex-justify-center xs-text-center" :style="`height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`">No results.</div>

      </div>
  </div>
</template>

<script>
export default {
  props: ["items", "navbarheight"],
  methods: {
   onResize(event) {
      this.navHeight();
      console.log(this.$store.state.navheight);
      console.log("index resize");
    },
    navHeight() {
      if (process.browser) {
        var height = document.getElementById("navbar").clientHeight;

        this.$store.commit("SET_NAVHEIGHT", height);
      }
    }
  },
  computed: {
 navbarheight() {
      return this.$store.state.navheight;
    }
  },
  updated() {
    this.$nextTick(() => {
      this.navHeight();
      console.log(this.$store.state.navheight);
      console.log("index updated");
    });
  },
  mounted() {
    if (process.browser) {
      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("index mounted");
        window.addEventListener("resize", this.onResize);
      });
    }
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  },

}
</script>

<style>

</style>
