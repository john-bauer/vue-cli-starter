<template>
  <div class="p-sandbox">
    <Hero
      title="Sandbox"
      subtitle="a place to mess around with the app adsfasdf"
      backgroundClass="is-dark"
    />
    <button class="button" v-on:click="testEnv">asdf</button>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'sandbox',
  components: {
    Hero
  },
  methods: {
    testEnv() {
      console.log(process.env.VUE_APP_TITLE);
    }
  }
};
</script>
