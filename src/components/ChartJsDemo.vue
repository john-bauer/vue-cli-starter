<template>
  <div class="c-chart-js-demo">
    <section class="section">
      <div class="container">
        <h1>Chart JS Demo</h1>
        <LineChart/>
        <BarChart/>
      </div>
    </section>
  </div>
</template>

<script>
import LineChart from '@/components/charts/LineChart.vue';
import BarChart from '@/components/charts/BarChart.vue';

export default {
  name: 'ChartJsDemo',
  components: {
    LineChart,
    BarChart
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
