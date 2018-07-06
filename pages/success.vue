<template>
<section>
<div class="full-height single xs-border-left xs-border-right" :style="`min-height:calc(100vh - ${navbarheight}px);;margin-top:${navbarheight}px`">
  <div class=" xs-p2 bcg-item"> 
    <div class="item xs-block xs-full-height">
     
  <h1 class="xs-py3 main-title">Thank you for signing up</h1>
        </div>
        </div>

  
</div>
<BaelFooter/>
  </section>
</template>



<script>
  import BaelFooter from '~/components/BaelFooter'
        import MdWrapper from '~/components/MdWrapper'

export default {

    head() {
    return {
      title:
       
        "Thanks! | " + this.$store.state.siteInfo.sitename,
      
    };
  },
    data() {
    return {
       }
  },
  computed:{
allBlogPosts() {
    return this.$store.state.blogPosts;
  },
    navbarheight() {
    return this.$store.state.navheight;
  }
  },
    components: {
    BaelFooter,MdWrapper
  }
};
</script>

<style>
.main-title {font-size: 3rem;}
.featured-image {max-height:55vh;object-fit:cover;object-position: 50% 50%;width:100%;}
.container .single .post-content {line-height: 1.618;color:#222;}
.single .post-content img {max-width:100%;height:auto;border: 1px solid #ccc; padding: 1rem; margin-top: 1.5rem;margin-bottom:1.5rem;}
.single .post-content p, .single .post-content li {margin-bottom:1rem;}
.post-content h1,.post-content h2,.post-content h3,.post-content h4,.post-content h5,.post-content h6 {color:#000;margin-bottom:.5rem;} 
.single {max-width:1200px;margin: 0 auto;}
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
