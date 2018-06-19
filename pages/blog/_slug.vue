<template>
  <section class="container xs-border xs-text-6 md-text-5">
    <SlideOut></SlideOut>
   <YaleHeader :blogtitle="title" />
<div class="full-height single xs-border-left xs-border-right" :style="`min-height:calc(100vh - ${navbarheight}px);;margin-top:${navbarheight}px`">
  <div class=" xs-p2 bcg-item"> 
    <div class="item xs-block xs-full-height">
       <div v-if="thumbnail"><img :src="thumbnail" :alt="title"></div>
  <h1 class="xs-py3">{{title}}</h1>
   <div class="xs-mt-5 bold">{{ date }}</div>
     <div class="xs-py3"><MdWrapper :body="body"/></div>
        </div>
        </div>

  
</div>
<YaleFooter/>
  </section>
</template>



<script>
  import SlideOut from '~/components/SlideOut'
  import YaleFooter from '~/components/YaleFooter'
    import YaleHeader from '~/components/YaleHeader'
        import MdWrapper from '~/components/MdWrapper'

export default {
  async asyncData({ params,app,payload,route }) {
    // const postPromise = process.BROWSER_BUILD
    //   ? import('~/content/blog/posts/' + params.slug + '.json')
    //   : Promise.resolve(
    //       require('~/content/blog/posts/' + params.slug + '.json')
    //     );

    let post = await import('~/content/blog/posts/' + params.slug + '.json');
    console.log(post)
    return post;
  },
    data() {
    return {
   navbarheight: '60'
       }
  },
    components: {
    SlideOut,YaleFooter,YaleHeader,MdWrapper
  }
};
</script>

<style>
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
