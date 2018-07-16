<template>
    <div>
    <div v-if="items2[0]" class="r full-height browse" :style="`height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`">
               <div v-if="items2 && count > total && allitems < 11" class="xs-border xs-p2 bcg-item">
        <div class="item xs-block xs-full-height xs-flex">
          <nuxt-link class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center" :to="`?page=${prevpage}`">
       &laquo; Previous Page 
          </nuxt-link>
        </div>
      </div>
      <div v-if="items2[pi]" v-for="(p,pi) in items2" :key="p.pi" class="xs-border xs-p2 bcg-item">
        <div class="item xs-block xs-full-height xs-flex">
          <nuxt-link class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center" :to="p._path">
            {{p.title}}
          </nuxt-link>
        </div>
      </div>

         <div v-if="items2 && count < total" class="xs-border xs-p2 bcg-item">
        <div class="item xs-block xs-full-height xs-flex">
          <nuxt-link class="xs-text-center xs-flex xs-full-height xs-flex-align-center xs-flex-justify-center xs-text-center" :to="`?page=${nextpage}`">
        Next Page &raquo;
          </nuxt-link>
        </div>
      </div>
   


    </div>
   <div v-else class="r full-height browse">
       <div class="xs-p2 c-100 xs-flex xs-flex-align-center xs-flex-justify-center xs-text-center" :style="`height:calc(100vh - ${navbarheight}px);margin-top:${navbarheight}px`">
         
         
         
          <div v-if="total > 0 && busy">

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" class="svg-gray-lighter" fill="#d3d3d3">
  <circle transform="translate(8 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(16 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.3"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
  <circle transform="translate(24 0)" cx="0" cy="16" r="0"> 
    <animate attributeName="r" values="0; 4; 0; 0" dur="1.2s" repeatCount="indefinite" begin="0.6"
      keytimes="0;0.2;0.7;1" keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8" calcMode="spline" />
  </circle>
</svg>
</div>
          <div v-else>No Results.</div>
        </div>

      </div>
  </div>
</template>

<script>
export default {
  props: ["items", "allitems"],
    data() {
    return {
     
      currentPage: null,
      pageNumbers: [],
      pageNumberCount: 0,
       items2: [],
       query: 1,
      busy: false,
      count: 0

    };
  },
  methods: {

        loadMore() {
            this.count = this.offset
      if (this.total > this.count && this.busy == false) {
        this.busy = true;
      
        setTimeout(() => {
          this.items2.splice(0);
          for (var i = 0, j = 11; i < j; i++) {
            let api = this.allitems[this.count];


            this.items2.push(api);
            this.count++;
          }

          this.busy = false;
        }, 750);
      }
    },
     
   onResize(event) {
      this.navHeight();
      console.log(this.$store.state.navheight);
      console.log("index resize");
    },




    navHeight() {
      if (process.browser) {
        var height = document.getElementById("navbar").clientHeight;

        this.$store.commit("SET_NAVHEIGHT", height - 1);
      }
    }
  },
  watch: {
    // whenever question changes, this function will run
      $route ({params, query}) {
        if (this.$route.query.page > 1) {
  this.loadMore()
    console.log('page > 1')
        } else if (this.$route.query.page == null) {
          this.$route.query.page = 1
           this.loadMore()
             console.log('null page')
        } else {
          this.loadMore()
          console.log('else')
        }
        
    },
    queryParam: function () {
     
     this.loadMore()
    }
  },
  computed: {
    offset(){
 if (this.queryParam > 1) {
return Number(this.queryParam - 1) * 11
     } else {
       return  0
     }
    
    },
        prevpage(){
           var prev = Number(this.queryParam) - 1
      return prev
    },
            nextpage(){
              var next = Number(this.queryParam) + 1
      return next
    },
 navbarheight() {
      return this.$store.state.navheight;
    },
      total() {
      return this.allitems.length;
    },

    queryParam() {
     if (this.$route.query.page == null) {
return 1
     } else {
        return Number(this.$route.query.page)
     }
    }
 
    

  },

 
  updated() {
    this.$nextTick(() => {
     
      this.navHeight();
      console.log(this.$store.state.navheight);
      console.log("index updated");
    });
  },
  mounted() {
    if (process.browser) {
    this.loadMore()

      this.$nextTick(() => {
        this.navHeight();
        console.log(this.$store.state.navheight);
        console.log("index mounted");
        window.addEventListener("resize", this.onResize);
      });
    }
  },
  beforeDestroy() {
    // Unregister the event listener before destroying this Vue instance
    window.removeEventListener("resize", this.onResize);
  },

}
</script>

<style>

</style>
