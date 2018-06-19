<template>
  <nuxt-link 
      :to="id">
      <article class="post-preview">
        <div
          :style="{ backgroundImage: 'url(http:' + thumbnail + ')'}"
          class="post-preview-thumbnail"
          ></div>
        <img :src="thumbnail" alt="" class="post-preview-thumbnail">
        <div class="post-preview-content">
          <h1>{{ title }}</h1>
          <p>{{ excerpt }}</p>
        </div>

      </article>
    </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
        type: String,
        required: true
    },
    excerpt: {
        type: String,
        required: true
    },
    thumbnailImage: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true
    }
  }
}
</script>



<style scoped>

    a {
        text-decoration: none;
        color: black;
    }

    .post-preview {
        box-shadow: 1px 1px 5px 0px rgba(0,0,0,.3);
    }

    .post-preview-thumbnail {
        background-position: center;
        background-size: cover;
        height: 10rem;
    }

    .post-preview-content {
        text-align: center;
        padding: 1rem;
    }

    /* @media (min-width: 35rem) {
        .post-preview {
            width: 25rem;
        }
    } */

</style>
