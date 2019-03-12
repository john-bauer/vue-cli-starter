<template>
  <div class="p-chartjs-example">
    <Hero
      title="📈 Chart JS Example"
      subtitle="A bunch of components built with Chart.js (using the vue-chartjs wrapper)"
      backgroundClass="is-link"
    />
    <div class="tabs is-centered">
      <ul>
        <li v-for="tab in tabs" :key="tab.name">
          <a>{{ tab.name }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';

export default {
  name: 'about',
  components: {
    Hero
  },
  data() {
    return {
      tabs: [
        {
          name: 'Line'
        },
        {
          name: 'Bar'
        },
        {
          name: 'Pie'
        },
        {
          name: 'Radar'
        }
      ]
    };
  }
};
</script>
