<template>
  <div class="p-firebase-example">
    <Hero
      title="🔥Firebase Example"
      subtitle="A bunch of components built with Chart.js (using the vue-chartjs wrapper)"
      backgroundClass="is-warning"
    />
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'about',
  components: {
    Hero
  }
};
</script>
