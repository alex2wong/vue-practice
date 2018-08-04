<template>
  <div class="dashboard">
    <div class="a-flexbox">
      <div class="a-flex a-flex__tile">
        <chart
          type='line' :chart-config="chartConfig"
          :labels="labels" :chart-data="lineData"></chart>
      </div>
      <div class="a-flex a-flex__tile">
        <chart
          type='pie' :chart-config="chartConfig"
          :labels="labels" :chart-data="pieData"></chart>
      </div>
    </div>
    <div class="a-flexbox">
      <div class="a-flex a-flex__tile">
        <VuMap id="map1" :center="[30.11, 121.12]">
          <marker :center="[30.11, 121.12]" slot="marker">This is marker..</marker>
        </VuMap>
      </div>
      <div class="a-flex">
        <Chart class="a-flex a-flex__tile"
        :chart-config="chartConfig"
        :labels="labels" :chart-data="donutData"></Chart>
      </div>
    </div>
    <div class="a-flexbox">
      <div class="a-flex a-flex__tile">
        <p>CopyRight@Alex2wong</p>
      </div>
    </div>
  </div>
</template>
<style>
  /* .flex-center {
    display: flex;
  } */
  
</style>

<script>
import VuMap from '@/components/VuMap';
import Chart from '@/components/Chart';
// import { mainColors } from '@/shared/const';

export default {
  components: {
    VuMap,
    Chart,
  },
  data() {
    return {
      labels: ['Wechat', 'QQ', 'Bing', 'Google', 'Twitter', 'Youtube'],
      data: [60, 20, 41, 31, 22, 15],
      chartConfig: {
        legend: {
          // display: false,
        },
        animation: {
          duration: 200, // general animation time
        },
      },
    };
  },
  computed: {
    lineData() {
      return [{
        data: this.data,
        label: 'Top Sales',
        pointBackgroundColor: '#fafafa',
        pointBorderWidth: 2,
        backgroundColor: 'rgba(40, 200, 200, 0.4)',
      }];
    },
    pieData() {
      return [{
        data: this.data,
        label: 'Top Memory',
      }];
    },
    donutData() {
      return [{
        data: this.data,
        label: 'Top App',
      }];
    },
  },
}
</script>
