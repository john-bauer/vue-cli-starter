<template>
  <div class="p-home">
    <section class="hero has-background-white is-large">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="is-size-1 has-text-weight-semibold is-size-2-mobile">
            Vue.js Starter
          </h1>
          <h2 class="subtitle">
            Bundled with common bindings for small to mid-size projects
          </h2>
          <a
            class="is-dark button is-medium"
            href="https://github.com/john-bauer/vue-cli-starter"
            target="none"
          >
            <span class="icon is-medium">
              <i class="fas fa-code"></i>
            </span>
            <span>View Source Code</span>
          </a>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="tile is-ancestor has-text-centered">
        <div class="tile is-vertical is-8">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-primary">
                <!-- <img src="../assets/img/firebase.png" class="image is-128x128"> -->
                <p class="title">Firebase</p>
                <p class="subtitle">
                  Connect your own project to the app quickly.
                </p>
                <button class="button">View Example</button>
              </article>
            </div>
            <div class="tile is-parent">
              <article class="tile is-child notification is-info">
                <p class="title">Bulma</p>
                <p class="subtitle">
                  Write your own scss on top of a lightweight library
                </p>
                <button class="button">View Example</button>
              </article>
            </div>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-success">
            <div class="content">
              <p class="title">Chart.js</p>
              <p class="subtitle">Browse pre-made charts as components.</p>
              <button class="button">View Example</button>
              <div class="content">
                <!-- Content -->
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
  components: {}
};
</script>

<style lang="scss">
.p-home .hero-body {
  background-image: url('../assets/img/material-bgs/12.jpg');
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
