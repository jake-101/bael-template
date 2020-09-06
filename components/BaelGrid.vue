<template>
<div class="xs-text-6 md-text-5">
    <div v-if="posts.length" class="r full-height browse" :style="`height:calc(100vh - var(--nav-height));margin-top:var(--nav-height)`">

      <div  v-for="(p,i) in posts" :key="i" class="xs-border xs-p2 bcg-item">
        <div class="item xs-block xs-full-height xs-flex">
          <nuxt-link class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center" :to="p.path">
            {{p.title}}
          </nuxt-link>
        </div>
      </div>

    </div>
    <div v-else class="r full-height browse">
      <div class="xs-p2 c-100 xs-flex xs-flex-align-center xs-flex-justify-center xs-text-center" :style="`height:calc(100vh - var(--nav-height));margin-top:var(--nav-height)`">

        
        <div v-if="posts.length < 1 && !busy">No Results.</div>
      </div>

  </div>
  </div>
</template>

<script>
export default {
  props: ["items", "allitems", "posts"],
  data() {
    return {
      currentPage: null,
      pageNumbers: [],
      pageNumberCount: 0,
      items2: [],
      query: 1,
      busy: false,
      count: 0
    };
  },
  methods: {
    // pageCheck() {
    //   if (this.allitems.length > 12) {
    //     this.$store.commit("paginateOn", true);
    //     this.$store.commit("resultsLength", this.allitems.length);
    //   } else if (this.allitems.length < 12) {
    //     this.$store.commit("paginateOff", false);
    //   } else {
    //     this.$store.commit("paginateOff", false);
    //   }
    // },

    // loadMore() {
    //   this.count = this.offset;
    //   if (this.total > this.count && this.busy == false) {
    //     this.busy = true;

     
    //       this.items2.splice(0);
    //       for (var i = 0, j = 12; i < j; i++) {
    //         let api = this.allitems[this.count];

    //         this.items2.push(api);
    //         this.count++;
    //       }

    //       this.busy = false;
        
    //   }
    // },




  },
  watch: {
    // whenever question changes, this function will run
    // $route({ params, query }) {
    //   if (this.$route.query.page > 1) {
    //     this.loadMore();
    //     this.navHeight();
    //     this.pageCheck();
    //   } else if (this.$route.query.page == null) {
    //     this.$route.query.page = 1;
    //     this.loadMore();
    //       this.navHeight();
    //     this.pageCheck();
    //   } else {
    //     this.loadMore();
    //       this.navHeight();
    //     this.pageCheck();
    //   }
    // },
    // queryParam: function() {
    //   this.loadMore();
    // }
  },
  computed: {
navHeight() {
  return this.$store.state.browser.navHeight
}
    // offset() {
    //   if (this.queryParam > 1) {
    //     return Number(this.queryParam - 1) * 12;
    //   } else {
    //     return 0;
    //   }
    // },
    // prevpage() {
    //   var prev = Number(this.queryParam) - 1;
    //   return prev;
    // },
    // nextpage() {
    //   var next = Number(this.queryParam) + 1;
    //   return next;
    // },
    // navbarheight() {
    //   return this.$store.state.navheight;
    // },
    // total() {
    //   return this.allitems.length;
    // },

    // queryParam() {
    //   if (this.$route.query.page == null) {
    //     return 1;
    //   } else {
    //     return Number(this.$route.query.page);
    //   }
    // }
  },

  // updated() {
  //   this.$nextTick(() => {
  //     this.$store.commit("SET_GRIDOFFSET", this.offset);
  //   });
  // },


};
</script>

<style>
</style>
