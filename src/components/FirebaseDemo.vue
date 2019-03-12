<template>
  <div class="c-firebase-demo">
    <section class="section">
      <div class="container">
        <h1>{{ title }}</h1>
        <button v-on:click="sayHello">Click me</button>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FirebaseDemo',
  data() {
    return {
      title: 'Firebase Demo'
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
