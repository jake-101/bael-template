<template>
<div>
<div class="r full-height browse" :style="`height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`">
   <div v-if="allBlogPosts" v-for="p in allBlogPosts" :key="p.slug" class="xs-border xs-p2 bcg-item">
    <div class="item xs-block xs-full-height xs-flex">
      <nuxt-link class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center" :to="p._path">
        {{p.title}}
        </nuxt-link>
        </div>
        </div> 
          <div class="xs-border xs-p2 bcg-item">

    </div>
  
</div>

  </div>
</template>

<script>

export default {  
    async asyncData({ params,app,payload,route,store }) {


  
  },  
  components: {
  
  },
  data() {


    return { 
      };
  },
     methods: {
        onResize(event) {
this.navHeight()
  },
     navHeight() {
       if (process.browser) {
            var height = document.getElementById('navbar').clientHeight
            console.log(height);
         
           this.$store.commit('SET_NAVHEIGHT', height)
            
       }
        }
  },
    updated() {
         this.$nextTick(() => { 
             this.navHeight() 
         })
  },
  mounted() {
  if (process.browser) {
    
             this.$nextTick(() => { 
    this.navHeight() 
  window.addEventListener('resize', this.onResize)



 })
   
     
}

    
  },
  beforeDestroy() {
  // Unregister the event listener before destroying this Vue instance
  window.removeEventListener('resize', this.onResize)
},
    computed: {
  allBlogPosts() {
    return this.$store.state.blogPosts;
  },
  navbarheight() {
    return this.$store.state.navheight;
  }
},
};
</script>

<style>
.browse a {width:100%;}
.search:focus {outline:none;}
.footer__heading {text-transform:uppercase;}
.no-gap {grid-gap:0;}
nav .r {grid-gap: 0;}
.r.full-height {grid-gap: 0;}
@media only screen and (max-width: 40rem) { 
.xs-collapse {visibility: hidden;    visibility: collapse;
    border: 0 !important;
    border-color: none !important;
    padding: 0 !important;}
    .xs-visible {visibility: visible;}
}
</style>
