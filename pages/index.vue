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
          <div class="xs-border xs-p2 bcg-item"></div>
  
</div>

  </div>
</template>

<script>

export default {  

  components: {
  
  },
  data() {


    return { 
      };
  },
     methods: {
        onResize(event) {
this.navHeight()
    console.log(this.$store.state.navheight)
      console.log('index resize')
  },
     navHeight() {
       if (process.browser) {
            var height = document.getElementById('navbar').clientHeight
         
           this.$store.commit('SET_NAVHEIGHT', height)
            
       }
        }
  },
    updated() {
         this.$nextTick(() => { 
             this.navHeight() 
                 console.log(this.$store.state.navheight)
      console.log('index updated')
         })
  },
  mounted() {
  if (process.browser) {
    
             this.$nextTick(() => { 
    this.navHeight() 
    console.log(this.$store.state.navheight)
      console.log('index mounted')
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
