<template>
  <footer class="fill-gray-lighter xs-text-6 md-text-5">
    <div class="r no-gap">

      <div class="c-12 xs-text-left xs-p2 xs-border">
        <p class="item bold">&nbsp;</p>
      </div>
      <div class="c-25 xs-text-left xs-p2 xs-border">
        <div class="item">
          <div v-show="siteDescription" class="footer__heading xs-mb2">About</div>
          <p v-show="siteDescription">{{siteDescription}}</p>
        </div>
      </div>
      <div class="c-25 xs-text-left xs-p2 xs-border">
        <div class="item">
          <div class="footer__heading xs-mb2">Newsletter Signup</div>
          <form method="post" action="/.netlify/functions/app" name="mailinglist">
            <input type="email" v-model="email" class="text-input text-input--small xs-mb1 xs-mr2" placeholder="you@email.com">
            <button type="submit" class="button button--transparent button--small">Submit</button>
          </form>
        </div>
      </div>
      <div class="c-25 xs-text-left xs-p2 xs-border">
        <div class="item">
          <div v-show="connectData" class="footer__heading xs-mb2">Connect</div>
          <ul class="list-unstyled">
            <li v-show="connectData" v-for="(c,i) in connectData" :key="i">
              <a :href="c.url">{{c.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="c-25 xs-text-left xs-p2 xs-border">
        <div class="item">
          <div class="footer__heading xs-mb2">Deploy</div>

              <a href="https://app.netlify.com/start/deploy?repository=https://github.com/jake-101/bael-template">
                <img style="height:29px;width:auto;" src="~/assets/deploy.svg" title="Deploy to Netlify">
              </a>
           
        </div>
      </div>
      <div class="c-12 xs-text-left xs-p2 xs-border">
        <div class="item xs-text-6">An open source design by
          <a href="https://jake101.com">jake101</a>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  props: ["email"],
  computed: {
    connectData() {
      return this.$store.state.connect.connectlinks;
    },
    siteDescription() {
      return this.$store.state.siteInfo.sitedescription;
    }
  }
};
</script>
<style scoped>
.text-input {
  max-width: 100%;
}
.footer__heading {
  max-width: 100%;
}
</style>