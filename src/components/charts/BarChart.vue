<script>
import { Bar } from 'vue-chartjs';

export default {
  extends: Bar,
  props: ['chartdata', 'options'],
  mounted() {
    this.renderChart(
      {
        labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America'],
        datasets: [
          {
            label: 'Population (Millions)',
            backgroundColor: [
              '#3e95cd',
              '#8e5ea2',
              '#3cba9f',
              '#e8c3b9',
              '#c45850'
            ],
            data: [2478, 5267, 734, 784, 433]
          }
        ]
      },
      { responsive: true, maintainAspectRatio: false }
    );
  }
};
</script>

<style></style>
