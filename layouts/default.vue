<template>
  <section class="container xs-border xs-text-6 md-text-5">

   <BaelHeader :blogtitle="blogtitle" :posts="blogposts" />
    <nuxt/>
        <SlideOut></SlideOut>
        <BaelFooter/>
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
