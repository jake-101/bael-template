<template>
  <div>
    <div v-if="!sent" class="item">
      <div class="footer__heading xs-mb2">Newsletter Signup</div>
      <form @submit.prevent="processForm" action="/.netlify/functions/app" name="mailinglist">
        <input
          type="email"
          v-model="emaildata.email"
          class="text-input text-input--small xs-mb1 xs-mr2"
          placeholder="you@email.com"
        />
        <button type="submit" class="button button--transparent button--small">Submit</button>
      </form>
    </div>
    <div class="item" v-else>
      <div class="xs-mb2">{{emaildata.email}} has been added to our newsletter.</div>
    </div>
  </div>
</template>

<script>
import _capitalize from "lodash/capitalize";
export default {
  data() {
    return {
      emaildata: {
        email: null,
      },
      sent: false,
    };
  },
  methods: {
    async processForm() {
      try {
        const sendgrid = await this.$axios.post(
          `${process.env.API_URL}/.netlify/functions/app`,
          this.emaildata
        );
        console.log("Processed!");
        this.sent = true;
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>