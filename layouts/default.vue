<template>
  <section class="container xs-border xs-text-6 md-text-5">
    <SlideOut></SlideOut>
   <BaelHeader :navheight="navbarheightdefault" :blogtitle="blogtitle" :posts="this.$store.state.blogPosts" />
    <nuxt/>
  </section>
</template>
<script>
  import SlideOut from '~/components/SlideOut'
  import BaelFooter from '~/components/BaelFooter'
    import BaelHeader from '~/components/BaelHeader'

export default {
   data() {
    return {
  
       }
  },
    computed:{
        navbarheightdefault() {
    return this.$store.state.navheight;
  },


  blogtitle() {
    return this.$store.state.blogTitle;
  }
  },
      components: {
    SlideOut,BaelHeader
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
