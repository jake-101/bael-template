<template>
    <div>
  <input v-model="query" class="search xs-flex-grow-1 text-input xs-border-none xs-fit xs-text-6 md-text-5 xs-m0 xs-p0" type="search" placeholder="Search">
      <!-- <ul class="xs-absolute results">
            <li class="xs-border xs-p1 fill-white" v-for="(xx,i) in compResults" :key="i">
              <a :href="`${xx._path}/`">
                {{xx.title}}
              </a>
            </li>
          </ul> -->
          </div>
</template>

<script>

export default {
        data() {
    return {
        query: ''
       }
  },
  watch: {
 query: function () {
     search(this.query);
    }
  },
  methods: {
result() {
    return search(query);
}

  },
  props: ['library'],
  mounted(){
      if (process.browser) {
    const Wade = require('wade')
          const search = Wade(this.library);

}
  }

}
</script>

<style>

</style>

