<template>
  <div
    class="bael-slideout xs-border xs-text-6 md-text-5"
    :class="{ isOpen: $store.state.menuIsActive  }"
  >
    <div class="bael-slideout-opener">
      <div
        @click="toggle"
        class="hamburger hamburger--spin js-hamburger"
        :class="{'is-active': $store.state.menuIsActive }"
      >
        <div class="hamburger-box">
          <div class="hamburger-inner"></div>
        </div>
      </div>
    </div>
    <ul class="bael-slideout-menu list-unstyled">
      <li class="bael-slideout-menu-item menu-logo">
        <nuxt-link
          v-if="info.siteicon  && info.showmenu"
          style="color:#000"
          class="text-black black-font site--name"
          to="/"
          exact
        >
          <img
            style="width:64px;"
            class="xs-block xs-fit xs-mb2"
            :src="info.siteicon"
            :alt="info.sitename"
          />
        </nuxt-link>
      </li>
      <li class="bael-slideout-menu-item--small">
        <nuxt-link to="/" exact>Home</nuxt-link>
      </li>
      <li v-if="categories.length" class="bael-slideout-menu-item--small">
        <nuxt-link to="/categories" exact>Categories</nuxt-link>
      </li>
      <li v-for="(p,i) in pages" :key="`pg-${i}`" class="bael-slideout-menu-item--small">
        <nuxt-link :to="p.path">{{p.title}}</nuxt-link>
      </li>
      <li v-if="info.menu" class="xs-mt5 bael-slideout-menu-item heading-font">Links</li>
      <li v-for="m in info.menu" :key="m.position" class="bael-slideout-menu-item--small">
        <a :href="m.link">{{m.name}}</a>
      </li>
    </ul>
  </div>
</template>

  <script>
export default {
  fetchOnServer: true,
  async fetch() {
    const pages = await this.$content("page").fetch();
    this.pages = pages;
  },
  data() {
    return {
      isOpen: false,
      links: null,
      pages: null,
    };
  },
  computed: {
    info() {
      return this.$store.state.info;
    },
    categories() {
      return this.$store.state.categories;
    },
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      // Look for .hamburger
      this.$store.commit("toggleMenuState");

      var hamburger = document.querySelector(".hamburger");
      // On click

      // Toggle class "is-active"

      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },
  },
};
</script>
  <style lang="scss">
.heading-font {
  text-transform: uppercase;
  font-weight: 800;
  border-top: 2px solid rgba(119, 119, 119, 0.4);
  color: rgba(119, 119, 119, 0.4);
  padding: 0.5rem 0.3rem;
  font-size: 85%;
}
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible;
}
.hamburger:hover {
  opacity: 0.7;
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative;
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px;
}
.hamburger-inner,
.hamburger-inner::before,
.hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease;
}
.hamburger-inner::before,
.hamburger-inner::after {
  content: "";
  display: block;
}
.hamburger-inner::before {
  top: -10px;
}
.hamburger-inner::after {
  bottom: -10px;
}

.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
}
.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in;
}
.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in,
    transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
}
.hamburger--spin.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out;
}
.hamburger--spin.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out,
    transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.bael-slideout {
  position: fixed;
  right: 0;
  top: 0;
  width: auto;
  min-width: 180px;
  height: 100vh;
  z-index: 1000;
  background-color: #fff;
  transform: translate3D(100%, 0, 0);
  transition: transform 0.6s;

  &.isOpen {
    transform: translate3D(0, 0, 0);
    transition: transform 0.6s;
  }
}

.bael-slideout-opener {
  position: absolute;
  top: -4px;
  right: 100%;
  transform: scale(0.5);
  margin-right: 0px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: #000;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
}

.bael-slideout-menu {
  font-weight: 600;
  transition: transform 1.6s ease(out-cubic);
  .menu-logo {
    padding: 0.5rem 0.3rem;
  }
}

.bael-slideout-menu-item,
.bael-slideout-menu-item--small {
  text-transform: uppercase;
}

.bael-slideout-menu-item--small {
  font-weight: 800;
  text-transform: uppercase;
}

.bael-slideout-menu-item--small a {
  cursor: pointer;
  border-top: 1px solid #666;
  display: block;
  padding: 0.5rem 0.3rem;
  &:hover {
    background: var(--hover-bg);
  }
  &:focus,
  :active {
    background: var(--active-bg);
  }
}
.bael-slideout-menu-item--small a:hover {
  text-decoration: none;
}
</style>
