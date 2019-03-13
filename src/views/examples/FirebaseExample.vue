<template>
  <div class="p-firebase-example">
    <Hero
      title="🔥Firebase Example"
      subtitle="Quick bindings for a project that involves Firebase"
      backgroundClass="is-warning"
    />
    <FirebaseDemo />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import FirebaseDemo from '@/components/FirebaseDemo.vue';

export default {
  name: 'about',
  components: {
    Hero,
    FirebaseDemo
  }
};
</script>
