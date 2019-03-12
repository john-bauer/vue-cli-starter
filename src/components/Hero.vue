<template>
  <div class="c-hero">
    <section class="hero" v-bind:class="backgroundClass">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">{{ title }}</h1>
          <h2 class="subtitle">{{ subtitle }}</h2>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Hero',
  props: {
    title: String,
    subtitle: String,
    backgroundClass: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
