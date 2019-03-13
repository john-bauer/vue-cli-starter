<template>
  <div class="c-navbar">
    <nav
      class="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <a class="navbar-item">
          <!-- LOGO SECTION -->
          <router-link to="/">
            <img alt="Vue logo" src="../assets/img/logo.png" />
          </router-link>
        </a>

        <!-- BURGER -->
        <a
          role="button"
          class="navbar-burger burger"
          v-bind:class="{ 'is-active': isActive }"
          aria-label="menu"
          aria-expanded="false"
          v-on:click="toggleMenu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <!-- LARGER VIEWPORTS NAVBAR -->
      <div class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-end" v-on:click="toggleMenu">
          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Examples</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/examples/firebase"
                >🔥 Firebase</router-link
              >
              <router-link class="navbar-item" to="/examples/chartjs"
                >📈 Chart.js</router-link
              >
              <router-link class="navbar-item" to="/examples/todo"
                >✅ Todo</router-link
              >
            </div>
          </div>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link class="navbar-item" to="/sandbox">Sandbox</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      isActive: false,
      pages: [
        {
          name: 'About',
          route: '/about'
        },
        {
          name: 'Sandbox',
          route: '/sandbox'
        }
      ]
    };
  },
  methods: {
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style></style>
