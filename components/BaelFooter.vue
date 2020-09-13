<template>
  <footer class="fill-gray-lighter xs-text-6 md-text-5">
    <div class="r no-gap">
      <SmoothReflow
        class="c-12 xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
      >
        <lazy-bael-pagination  v-if="pagination.active" :pagination="pagination" />
      </SmoothReflow>
      <div
        class="xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
        :class="signupAboutSize"
      >
        <div class="item">
          <div v-if="siteDescription" class="footer__heading xs-mb2">About</div>
          <p v-if="siteDescription">{{siteDescription}}</p>
        </div>
      </div>
      <div
        v-if="signupBoolean"
        class="c-25 xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
      >
        <send-grid />
      </div>
      <div
        class="xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
        :class="signupAboutSize"
      >
        <div class="item">
          <div v-if="connectData" class="footer__heading xs-mb2">Connect</div>
          <ul v-if="connectData" class="list-unstyled">
            <li v-for="(c,i) in connectData" :key="i">
              <a :href="c.url">{{c.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none"
        :class="signupAboutSize"
      >
        <div class="item">
          <div class="footer__heading xs-mb2">Deploy</div>

          <a
            href="https://app.netlify.com/start/deploy?repository=https://github.com/jake-101/bael-template"
          >
            <img
              style="height:29px;width:auto;"
              src="~/assets/deploy.svg"
              title="Deploy to Netlify"
            />
          </a>
        </div>
      </div>
      <div class="c-12 xs-text-left xs-p2 xs-border xs-border-right-none xs-border-bottom-none">
        <div class="item xs-text-6">
          <a href="https://github.com/jake-101/bael-template">Bael</a>, An open source design by
          <a href="https://jake101.com">jake101</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {},
  computed: {
    pagination() {
      return this.$store.state.pagination;
    },
    signupAboutSize: function () {
      return {
        "c-25": this.signupBoolean,
        "c-4": !this.signupBoolean,
      };
    },
    // prevpage() {
    //   var prev = Number(this.queryParam) - 1;
    //   return prev;
    // },
    // totalpages() {
    //   var res = this.$store.state.resultsnum;
    //   var total = Math.ceil(res / 12);
    //   return total;
    // },

    connectData() {
      return this.$store.state.connect;
    },
    siteDescription() {
      return this.$store.state.info.sitedescription;
    },
    signupBoolean() {
      return this.$store.state.info.emailsignup;
    },
  },
};
</script>

<style>
.text-input {
  max-width: 100%;
}

.footer__heading {
  max-width: 100%;
  color: rgba(119, 119, 119, 0.4);
  font-weight: 800;
  font-size: 85%;
}
.pagination__button--disabled {
  pointer-events: none;
}
</style>
