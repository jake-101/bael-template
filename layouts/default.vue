<template>
  <section class="container xs-border xs-text-6 md-text-5">

   <BaelHeader :blogtitle="blogtitle" :posts="blogposts" />
    <nuxt/>
        <SlideOut/>
        <BaelFooter :email="email"/>
  </section>
</template>
<script>
  import SlideOut from '~/components/SlideOut'
  import BaelFooter from '~/components/BaelFooter'
    import BaelHeader from '~/components/BaelHeader'


export default {
   data() {
    return {
  email: {email:""},
       }
  },
  methods: {

         navHeight() {
       if (process.browser) {
            var height = document.getElementById('navbar').clientHeight
         
           this.$store.commit('SET_NAVHEIGHT', height)
            
       }
        }
  },
   updated() {
    if (process.browser) {
     
         this.$nextTick(() => { 
             this.navHeight() 
       console.log(this.$store.state.navheight)
      console.log('default updated')
 })
   
     
}
  },
  mounted() {

  if (process.browser) {
   
         this.$nextTick(() => { 
             this.navHeight() 
                 console.log(this.$store.state.navheight)
      console.log('default mounted')

         })

   
     
}
    
  },
    computed:{


  blogposts() {
    return this.$store.state.blogPosts;
  },
  blogtitle() {
    return this.$store.state.blogTitle;
  }
  },
      components: {
    SlideOut,BaelHeader,BaelFooter
  }
}


</script>


<style>
html
{


  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}
</style>
