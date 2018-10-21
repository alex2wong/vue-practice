<template>
  <form action="">
    <h4>Change Chart Styles</h4>
    <label for="bgcolor">backgroundColor: </label>
    <input type="color" name="bgcolor" id=""
        :value="bgColor" @change="updateBgColor">
    <label for="radius">pointBorderWidth: </label>
    <input type="number" name="radius" id=""
        :value="pointBorderwid" @change="updateBorderWidth">
    <input type="button" @click="updateChart" value="Update Chart">
  </form>
</template>
<script>


export default {
  props: {
      chartData: {
          type: Array,
      }
  },
  computed: {
      bgColor() {
          const colorStr = this.chartData[0].backgroundColor;
          return colorStr;
      },
      pointBorderwid() {
          return this.chartData[0].pointBorderWidth;
      },
  },
  methods: {
      updateBgColor(evt) {
          // actually we should not change it directly.. we need a immutate/deepcloned one.
          console.warn(`newVal: ${evt}`);
          this.chartData[0].backgroundColor = evt.target.value;
          // this.updateChart();
      },
      updateBorderWidth(evt) {
          this.chartData[0].pointBorderWidth = Number(evt.target.value);
          // this.updateChart();
      },
      updateChart() {
          // emit change event to trigger updateChart data.datasets.
          console.warn(`emit changed evt.. emit new chartData ? ${this.chartData[0].backgroundColor}`);
          this.$emit('change', this.chartData);
          // change these chartData.background things, actually they would done
      }
  }
}
</script>
