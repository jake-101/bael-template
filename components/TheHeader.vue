<template>
  <header class="main-header">
      <nav class="main-nav">
          <ul class="nav-links">
              <nuxt-link to="/"             tag="a" class="nav-link"><li>Alle Beiträge</li> </nuxt-link>
              <!-- <nuxt-link to="/impressum"    tag="a" class="nav-link"><li>Impressum</li>     </nuxt-link>
              <nuxt-link to="/ueber-mich"    tag="a" class="nav-link"><li>Über mich</li>     </nuxt-link> -->
          </ul>
      </nav>
  </header>
</template>



<style scoped>

    .main-header {
        top: 0;
        left: 0;
        width: 100%;
        position: fixed;
        background: #022d30;
        height: 4.5rem;
    }

    .main-nav {
        height: 100%;
    }

    ul.nav-links {
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }

    a.nav-link {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0.2rem;
        padding: .5rem 1.5rem;
        text-decoration: none;
        color: white;
        border-bottom: 3px solid rgba(0,0,0,0);
    }

    a.nav-link.nuxt-link-exact-active {
        border-bottom: 3px solid #06c4d1;
        background-color: rgba(255,255,255,.1);
    }

    /* a.nav-link {
        display: block;
        text-decoration: none;
        color: white;
    } */

    .nav-link:hover,
    .nav-link:active,
    .nav-link.nuxt-link-exact-active {
        color: #06c4d1;
    }

</style>

