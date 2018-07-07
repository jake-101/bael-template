<template>
<nav ref="navBar" id="navbar" class="sm-border-bottom">
    <div class="r">

      <div class="c-4 xs-text-left xs-p2 sm-border-right">
        <div class="item bold sitename"><nuxt-link to="/" exact>{{headerSiteName}}</nuxt-link></div>
      </div>

      <div class="c-4 xs-border-top xs-border-bottom sm-border-top-none sm-border-bottom-none sm-border-left sm-border-right xs-p2">
        <div class="item xs-flex">
    <VueFuse placeholder="Search" :compResults="compResults" :keys="keys" :list="allPosts" event-name="searchChanged"/>
         </div>

      </div>
         <div v-show="blogtitle" class="c-12 xs-border-top xs-border-bottom xs-p2">
        <div class="item xs-flex"><nuxt-link to="/" exact>Home</nuxt-link>  <span v-if="blogcat">&nbsp; > {{blogcat}} </span>&nbsp; > {{blogtitle}}
        </div>
      </div>
 

    </div>
  </nav>
</template>
<script>
import VueFuse from '~/components/VueFuse'
export default {
  props: ['blogtitle','posts','blogcat'],
    data() {
  
    
    return { 
          results: [], 
       keys: ["title", "body"],
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
allPosts() {
  return this.$store.state.blogPosts
  
},
      headerSiteName() {
    return this.$store.state.siteInfo.sitename
  },
  componentResults() {
        return this.$store.state.results

  }
},




    methods: {
     navHeight() {
           var height = document.getElementById('navbar').clientHeight
            console.log(height);
           this.$store.commit('SET_NAVHEIGHT', height)
        }
  },  mounted() {
    this.$on("searchChanged", results => {
      this.compResults = results;


    });
 

 
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