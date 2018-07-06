<template>
  <nav ref="navBar" id="navbar" class="sm-border-bottom">
    <div class="r">

      <div class="c-4 xs-text-left xs-p2 sm-border-right">
        <div class="item bold sitename"><nuxt-link to="/" exact>{{headerSiteName}}</nuxt-link></div>
      </div>

      <div class="c-4 xs-border-top xs-border-bottom sm-border-top-none sm-border-bottom-none sm-border-left sm-border-right  xs-p2">
        <div class="item xs-flex">
                  <VueFuse v-show="posts" placeholder="Search" :keys="keys" :list="posts" event-name="searchChanged"></VueFuse>

        </div>
          <transition-group v-show="componentResults" name="list" tag="ul" class="xs-absolute results">
            <li class="xs-border xs-p1 fill-white" v-for="xx in componentResults" :key="xx._path">
              <nuxt-link :to="xx._path">
                <span v-html="xx.title"></span>
              </nuxt-link>
            </li>
          </transition-group>
       <!-- <no-ssr> <ul class="" v-if="this.$store.state.results.length">
          <li class="" v-for="r in this.$store.state.results" :key="r._path"><a :href="r._path">{{r.title}}</a></li>
        </ul></no-ssr> -->
      </div>
         <div v-if="blogtitle" class="c-12 xs-border-top xs-border-bottom xs-p2">
        <div class="item xs-flex"><nuxt-link to="/" exact>Home</nuxt-link>  &nbsp; > {{blogtitle}}
        </div>
      </div>
 

    </div>
  </nav>
</template>
<script>
import VueFuse from "~/components/VueFuse";

export default {
  props: ['blogtitle','posts','navheight'],
    data() {
  
    
    return { 
          results: [], 
       keys: ["title", "body"],
       navbarheight: '60',
         prodsupport: [],
      allitems: [],
      query:'',
      term: "",
      termtwo: "",
      type: [],
        options: {
         keys: ["title", "body"]
      },
      defaultAllToggle: true,
      compResults: [],
      methodResults: [],
       };
  },
  components: {VueFuse},
  computed: {

      headerSiteName() {
    return this.$store.state.siteInfo.sitename
  },
  componentResults() {
        return this.$store.state.results

  }
},
 watch: {


      
  },



    methods: {
     navHeight() {
       var nav = this.$refs.navBar
            var height = nav.clientHeight;
            console.log(height);
           this.$store.commit('SET_NAVHEIGHT', height)
        }
  },
  updated() {

    if (process.browser) {

     
 
}
   
    
  },  mounted() {

    if (process.browser) {
     this.$on("searchChanged", results => {
      this.compResults = results;
                 this.$store.commit('SET_RESULTS', results)


    });
      this.navHeight()
 
}
   
    
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