<template>
<div>
 <h3>Test Import Module</h3>
 <div class="a-flexbox">
    <div id="chartdiv" class="a-flex chart-container"></div>
    <div id="chartdiv2" class="a-flex chart-container"></div>
 </div>
</div>
</template>
<style>
  .chart-container {
    min-height: 300px;
  }
  .a-flexbox {
    display: flex;
    flex-direction: row;
  }
  .a-flexbox .a-flex {
    flex: 1 1;
  }
</style>
<script>
require('amcharts3/amcharts/amcharts');
require('amcharts3/amcharts/serial');
require('amcharts3/amcharts/pie');
import { Util, CanvasOverlayer } from 'mapbox-plugins';

export default {
  mounted() {
    const cloned = Util.deepClone({ a: 1, b: [11, 22] });
    console.warn(`deepcloned obj.. ${cloned.a} and [${cloned.b.join(',')}]`);
    this.$nextTick(this.initChart);
  },
  methods: {
    initChart: function() {
      console.warn(`after imported lib, init chart..`);

      const data = [
        { "type": "Margherita", "sold": 120 },
        { "type": "Funghi", "sold": 82 },
        { "type": "Capricciosa", "sold": 78 },
        { "type": "Quattro Stagioni", "sold": 71 },
      ];
      
      const serialOpt = {
        "type": "serial",
        "categoryField": "type",
        "chartCursor": {},
        "graphs": [
          {
            "type": "column",
            "title": "Pizza types",
            "valueField": "sold",
            "fillAlphas": 0.8,
          },
        ],
        "dataProvider": data
      };

      const pieOpt = {
        type: 'pie',
        titleField: 'type',
        valueField: 'sold',
        dataProvider: data,
      };

      AmCharts.makeChart("chartdiv", serialOpt);
      AmCharts.makeChart('chartdiv2', pieOpt);
    },
  },
  
}
</script>
