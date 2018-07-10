<template>
  <div class="searchwrapper xs-relative">
    <input class="search xs-flex-grow-1 text-input xs-border-none xs-fit xs-text-5 md-text-4 xs-m0 xs-p0" type="search" v-model="value" :placeholder="placeholder">
    <img class="xs-absolute searchicon xs-r0 sm-l0" src="~/assets/bx-search.svg">
    <ul class="xs-absolute results">
      <li class="xs-border xs-p2 fill-white" v-for="(xx,i) in compResults" :key="i">
        <a :href="`${xx._path}/`">
          {{xx.title}}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
if (process.browser) {
  var Fuse = require("fuse.js");
}
export default {
  data() {
    return {
      fuse: null,
      value: "",
      result: []
    };
  },
  name: "VueFuse",
  computed: {
    options() {
      var options = {
        caseSensitive: this.caseSensitive,
        includeScore: this.includeScore,
        includeMatches: this.includeMatches,
        tokenize: this.tokenize,
        matchAllTokens: this.matchAllTokens,
        findAllMatches: this.findAllMatches,
        shouldSort: this.shouldSort,
        threshold: this.threshold,
        location: this.location,
        distance: this.distance,
        maxPatternLength: this.maxPatternLength,
        minMatchCharLength: this.minMatchCharLength,
        keys: this.keys
      };
      if (this.id !== "") {
        options.id = this.id;
      }
      return options;
    }
  },
  watch: {
    list() {
      this.fuse.list = this.list;
      this.fuseSearch();
    },
    search() {
      this.value = this.search;
    },
    value() {
      this.$parent.$emit(this.inputChangeEventName, this.value);
      this.fuseSearch();
    },
    result() {
      this.$parent.$emit(this.eventName, this.result);
    }
  },
  methods: {
    initFuse() {
      this.fuse = new Fuse(this.list, this.options);
      if (this.defaultAll) {
        this.result = this.list;
      }
      if (this.search) {
        this.value = this.search;
      }
    },
    fuseSearch() {
      if (this.value.trim() === "")
        if (this.defaultAll) {
          this.result = this.list;
        } else {
          this.result = [];
        }
      else this.result = this.fuse.search(this.value.trim());
    }
  },
  /**
   * Vue 1.x
   */

  /**
   * Vue 2.x
   */
  mounted() {
    this.initFuse();
    this.$on("searchChanged", results => {
      this.compResults = results;
    });
  },
  props: {
    compResults: {
      type: Array
    },
    placeholder: {
      type: String,
      default: ""
    },
    search: {
      type: String,
      default: ""
    },
    eventName: {
      type: String,
      default: "fuseResultsUpdated"
    },
    inputChangeEventName: {
      type: String,
      default: "fuseInputChanged"
    },
    defaultAll: {
      type: Boolean,
      default: false
    },
    list: {
      type: Array
    },
    caseSensitive: {
      type: Boolean,
      default: false
    },
    includeScore: {
      type: Boolean,
      default: false
    },
    includeMatches: {
      type: Boolean,
      default: false
    },
    tokenize: {
      type: Boolean,
      default: true
    },
    matchAllTokens: {
      type: Boolean,
      default: true
    },
    findAllMatches: {
      type: Boolean,
      default: false
    },
    id: {
      type: String,
      default: ""
    },
    shouldSort: {
      type: Boolean,
      default: true
    },
    threshold: {
      type: Number,
      default: 0.25
    },
    location: {
      type: Number,
      default: 0
    },
    distance: {
      type: Number,
      default: 800
    },
    maxPatternLength: {
      type: Number,
      default: 32
    },
    minMatchCharLength: {
      type: Number,
      default: 1
    },
    keys: {
      type: Array
    }
  }
};
</script>
<style>
.searchwrapper {
  width: 100%;
}
input.search {
  width: 100%;
  text-indent: 22px;
}
.results {
  top: 1.35rem;
}
.searchicon {
  height: 18px;
  top: 0px;
}
.results a {
  display: block;
  width: 100%;
}
@media only screen and (max-width: 40rem) {
  input.search {
    text-indent: 0;
  }
}
</style>