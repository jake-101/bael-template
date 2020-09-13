<template>
  <div class="item xs-text-center">
    <div v-if="pagination" class="xs-flex xs-flex-justify-center xs-flex-align-center">
      <span class="xs-absolute xs-l1 xs-text-6 text-gray-lighter xs-mr2">
        <span class="bold">Page {{pagination.page || 1}} / {{pagination.totalPages}}</span>
      </span>

      <div class="pagination">
        <!-- <nuxt-link
                    :to="`/p/${parseInt(this.pagination.page) - 1}`"
                tag="button"
                :class="{ 'pagination__button--disabled': this.prevpage <= 0 }"
                class="pagination__button pagination__button--prev"
        >-->
        <nuxt-link
        exact
          :to="backButton"
          tag="button"
          class="pagination__button pagination__button--prev"
          :class="{ 'pagination__button--disabled': this.pagination.page <= 1 }"
        >
          <svg
            class="pagination__button--prev-icon"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M368.619 16.892l24.485 24.449c2.938 2.934 4.897 7.335 4.897 11.246 0 3.912-1.959 8.313-4.897 11.246l-192.448 192.168 192.448 192.168c2.938 2.934 4.897 7.335 4.897 11.246 0 4.401-1.959 8.313-4.897 11.246l-24.485 24.449c-2.938 2.934-7.345 4.89-11.263 4.89s-8.325-1.956-11.263-4.89l-228.196-227.864c-2.938-2.934-4.897-7.335-4.897-11.246 0-3.912 1.959-8.313 4.897-11.246l228.196-227.864c2.938-2.934 7.345-4.89 11.263-4.89s8.325 1.956 11.263 4.89v.002z"
            />
          </svg>
        </nuxt-link>
        <nuxt-link
          :to="fwdButton"
          tag="button"
          :class="{ 'pagination__button--disabled': this.pagination.page >= this.pagination.totalPages }"
          class="pagination__button pagination__button--next"
        >
          <svg
            class="pagination__button--next-icon"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M142.382 16.892l-24.485 24.449c-2.938 2.934-4.897 7.335-4.897 11.246 0 3.912 1.959 8.313 4.897 11.246l192.448 192.168-192.448 192.168c-2.938 2.934-4.897 7.335-4.897 11.246 0 4.401 1.959 8.313 4.897 11.246l24.485 24.449c2.938 2.934 7.345 4.89 11.263 4.89s8.325-1.956 11.263-4.89l228.196-227.864c2.938-2.934 4.897-7.335 4.897-11.246 0-3.912-1.959-8.313-4.897-11.246l-228.196-227.864c-2.938-2.934-7.345-4.89-11.263-4.89s-8.325 1.956-11.263 4.89v.002z"
            />
          </svg>
        </nuxt-link>
      </div>

      <div></div>
    </div>
    <div v-else>&nbsp;</div>
  </div>
</template>
<script>
export default {
  props: {
    pagination: Object,
  },
  computed: {
    backButton() {
      return this.pagination.page - 1 == 1 ||this.pagination.page - 1 == 0  ? '/' : `/p/${parseInt(this.pagination.page) - 1}`;
    },
    fwdButton() {
      return `/p/${parseInt(this.pagination.page) + 1}`;
    },
  },
};
</script>

       