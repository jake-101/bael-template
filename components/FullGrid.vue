<template>
<!-- TODO: Update to new version -->
  <div class="xs-text-6 md-text-5">
    <div v-if="items2[0]" class="r browse full-height" :style="`margin-top:var(--nav-height);`">
      <div
        v-if="items2[pi]"
        v-for="(p,pi) in items2"
        :key="p.pi"
        class="xs-border xs-p2 full-item"
        :style="`height:calc(100vh - var(--nav-height);`"
      >
        <div
          v-if="p.thumbnail"
          class="item xs-block xs-full-height xs-flex xs-relative xs-flex-align-start xs-flex-justify-end xs-text-left"
        >
          <div
            class="xs-text-left xs-flex xs-full-height xs-flex-justify-end xs-flex-align-end xs-width-auto"
          >
            <nuxt-link class="full-bg-link" :to="p._path">{{p.title}}</nuxt-link>
          </div>
          <nuxt-link :to="p._path">
            <img v-lazy="p.thumbnail" :key="p.thumbnail" class="full-bg-image" />

            <div v-if="!p.thumbnail" class="full-bg-color"></div>
          </nuxt-link>
        </div>
        <div
          v-else
          class="item item-txt xs-block xs-full-height xs-flex xs-relative xs-flex-align-center xs-flex-justify-center xs-text-center"
        >
          <nuxt-link class="nobg-link" :to="p._path">{{p.title}}</nuxt-link>
        </div>
      </div>
    </div>
    <div v-else class="r full-height browse">
      <div
        class="xs-p2 c-100 xs-flex xs-flex-align-center xs-flex-justify-center xs-text-center"
        :style="`height:calc(100vh - var(--nav-height));margin-top:var(--nav-height)`"
      >
        <div v-if="total < 1 && !busy">No Results.</div>
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
      count: 0,
    };
  },
  methods: {
    pageCheck() {
      if (this.allitems.length > 12) {
        this.$store.commit("paginateOn", true);
        this.$store.commit("resultsLength", this.allitems.length);
      } else if (this.allitems.length < 12) {
        this.$store.commit("paginateOff", false);
      } else {
        this.$store.commit("paginateOff", false);
      }
    },

    loadMore() {
      this.count = this.offset;
      if (this.total > this.count && this.busy == false) {
        this.busy = true;

        this.items2.splice(0);
        for (var i = 0, j = 12; i < j; i++) {
          let api = this.allitems[this.count];

          this.items2.push(api);
          this.count++;
        }

        this.busy = false;
      }
    },
  },
  watch: {
    // whenever question changes, this function will run
    $route({ params, query }) {
      if (this.$route.query.page > 1) {
        this.loadMore();
        this.navHeight();
        this.pageCheck();
      } else if (this.$route.query.page == null) {
        this.$route.query.page = 1;
        this.loadMore();
        this.navHeight();
        this.pageCheck();
      } else {
        this.loadMore();
        this.navHeight();
        this.pageCheck();
      }
    },
    queryParam: function () {
      this.loadMore();
    },
  },
  computed: {
    offset() {
      if (this.queryParam > 1) {
        return Number(this.queryParam - 1) * 12;
      } else {
        return 0;
      }
    },
    prevpage() {
      var prev = Number(this.queryParam) - 1;
      return prev;
    },
    nextpage() {
      var next = Number(this.queryParam) + 1;
      return next;
    },

    total() {
      return this.allitems.length;
    },

    queryParam() {
      if (this.$route.query.page == null) {
        return 1;
      } else {
        return Number(this.$route.query.page);
      }
    },
  },
};
</script>

<style>
img[lazy="loading"] {
  opacity: 0;
  transition: 0.8s all;
  transition-delay: 0.8s;
}
img[lazy="loaded"] {
  opacity: 1;
  transition: 0.8s all;
  transition-delay: 0.8s;
}
.nobg-link {
  font-size: calc(1.4rem + 2vw);
}
.full-bg-link {
  z-index: 2;
  padding: 1.2rem;
  transition: 0.8s all;
}
.item-txt {
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 19%,
    rgba(247, 247, 247, 1) 100%
  );
}
.full-bg-image {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  object-fit: cover;
  object-position: 50% 50%;
  width: 100%;
  height: 100%;
  transition: 0.4s all;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
.item:hover .full-bg-image,
.item:hover .full-bg-color {
  opacity: 0.8;
  transition: 0.4s all;
}
.item .full-bg-link {
  background: #fff;
  transition: 0.8s all;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);
}
.full-bg-link h2 {
  margin: 0;
}
</style>
