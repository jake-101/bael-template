<template>
  <nav ref="navBar" class="sm-border-bottom">
    <div class="r">

      <div class="c-4 xs-text-left xs-p2 sm-border-right">
        <p class="item bold sitename"><nuxt-link to="/" exact>{{headerSiteName}}</nuxt-link></p>
      </div>

      <div class="c-4 xs-border-top xs-border-bottom sm-border-top-none sm-border-bottom-none sm-border-left sm-border-right  xs-p2">
        <p class="item xs-flex"> <vue-fuse v-if="posts" placeholder="Search" :keys="keys" :list="posts" :defaultAll="false" class="search xs-flex-grow-1 text-input xs-border-none xs-fit xs-text-6 md-text-5 xs-m0 xs-p0"></vue-fuse>
        
        </p>
        <ul class="xs-absolute results" v-if="results.length">
          <li class="xs-border xs-p1 fill-white" v-for="r in results" :key="r._path"><nuxt-link :to="r._path">{{r.title}}</nuxt-link></li>
        </ul>
      </div>
         <div v-if="blogtitle" class="c-12 xs-border-top xs-border-bottom xs-p2">
        <p class="item xs-flex"><nuxt-link to="/" exact>Home</nuxt-link>  &nbsp; > {{blogtitle}}
        </p>
      </div>
 

    </div>
  </nav>
</template>
<script>

export default {
  props: ['blogtitle','posts'],
    data() {
  
    
    return { 
          results: [], 
       keys: ["title", "body"],
       navbarheight: '60' };
  },
  computed: {

      headerSiteName() {
    return this.$store.state.siteInfo.sitename
  }
},




    methods: {
     navHeight() {
            var height = this.$refs.navBar.clientHeight;
            console.log(height);
            this.navbarheight = height
            this.$parent.navbarheight = height
        }
  },
  mounted() {
        this.$on('fuseResultsUpdated', results => {
      this.results = results
    })
     this.navHeight()
    
  }
}
</script>
<style>
.results {padding-left:0;transform:translateY(17px);width:30vw;}
.results li {list-style-type: none;margin-left:0;}
nav {position:fixed;background:white;top:0;left:0;right:0;}
.sitename {text-transform:uppercase;}
@media only screen and (max-width: 40rem) { 
.results {width:94vw;}

}
</style>