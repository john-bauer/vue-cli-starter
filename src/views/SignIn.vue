<template>
  <div class="p-sign-in">
    <Hero
      title="Sign In"
      subtitle="Enter your email address and password, or use your social profile to sign into your account."
      backgroundClass="is-light"
    />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'sandbox',
  components: {
    Hero
  }
};
</script>

<style lang="scss"></style>
