<template>
  <canvas :id="chartId" :class="['a-chart']" :height="height"></canvas>
</template>
<style>
  .a-chart {
    min-height: 120px;
  }
</style>
<script>
import { Chart }  from 'chart.js';
import { mainColors } from '@/shared/const';

export default {
  props: {
    type: {
      type: String,
      default: 'bar',
    },
    labels: {
      type: Array,
      default () {
        return [];
      }
    },
    chartData: {
      type: Array,
    },
    chartConfig: {
      type: Object,
      default () {
        return {};
      }
    },
    height: {
      type: Number,
      default: 120,
    },
  },
  data () {
    return {
      chart: null,
      chartId: `chart_${Math.round(Math.random() * 1000000)}`,
    };
  },
  watch: {
    datasets() {
      this.chart.data.datasets = this.chartData;
      this.chart.update();
      console.warn(`updating chart datasets...re-rendering.`);
    }
  },
  updateData() {

  },
  mounted() {
    // const chartCont = this.$refs[this.chartId];
    console.warn(`debug: chart.vue..mounted.`);
    const defaultDataset = { 
      backgroundColor: mainColors,
    };
    this.chart = new Chart(this.chartId, {
      type: this.type,
      data: {
        labels: this.labels,
        datasets: this.chartData.map((dataset) => {
          return Object.assign(defaultDataset, dataset);
        }),
      },
      options: this.chartConfig,
    });
  }
}
</script>
