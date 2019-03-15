<template>
  <div class="p-chartjs-example">
    <Hero
      title="📈 Chart JS Example"
      subtitle="A bunch of components built with Chart.js (using the vue-chartjs wrapper)"
      backgroundClass="is-link"
    />
    <div class="tabs is-centered">
      <ul>
        <li
          v-for="tab in tabs"
          :key="tab.name"
          v-bind:class="{ 'is-active': tab.activeTab }"
          v-on:click="toggleTabs(tab)"
        >
          <a>{{ tab.name }}</a>
        </li>
      </ul>
    </div>
    <div class="container">
      <!-- TODO: Fix, this is beyond lazy -->
      <LineChart v-if="tabs[0].activeTab" />
      <BarChart v-if="tabs[1].activeTab" />
      <PieChart v-if="tabs[2].activeTab" />
      <BubbleChart v-if="tabs[3].activeTab" />
      <RadarChart v-if="tabs[4].activeTab" />
      <DoughnutChart v-if="tabs[5].activeTab" />
      <PolarAreaChart v-if="tabs[6].activeTab" />
    </div>
  </div>
</template>

<script>
import Hero from '@/components/Hero.vue';
import LineChart from '@/components/charts/LineChart.vue';
import BarChart from '@/components/charts/BarChart.vue';
import PieChart from '@/components/charts/PieChart.vue';
import BubbleChart from '@/components/charts/BubbleChart.vue';
import RadarChart from '@/components/charts/RadarChart.vue';
import DoughnutChart from '@/components/charts/DoughnutChart.vue';
import PolarAreaChart from '@/components/charts/PolarAreaChart.vue';

export default {
  name: 'about',
  components: {
    Hero,
    LineChart,
    BarChart,
    PieChart,
    BubbleChart,
    RadarChart,
    DoughnutChart,
    PolarAreaChart
  },
  data() {
    return {
      isActive: false,
      tabs: [
        {
          name: 'Line',
          activeTab: true
        },
        {
          name: 'Bar',
          activeTab: false
        },
        {
          name: 'Pie',
          activeTab: false
        },
        {
          name: 'Bubble',
          activeTab: false
        },
        {
          name: 'Radar',
          activeTab: false
        },
        {
          name: 'Doughnut',
          activeTab: false
        },
        {
          name: 'PolarArea',
          activeTab: false
        }
      ]
    };
  },
  methods: {
    toggleTabs(tab) {
      for (let i = 0; i < this.tabs.length; i++) {
        this.tabs[i].activeTab = false;
      }
      tab.activeTab = true;
    }
  }
};
</script>
