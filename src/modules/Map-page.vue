<template>
  <div class="a-flexbox">
   <vu-map :id="mapId" :center="center" :class="['a-flex']">
     <!-- <layer :url="tileUrl" slot="layer"></layer> -->
     <marker :center="marker" slot="marker">This is marker..</marker>
   </vu-map>
  </div>
</template>
<style>
  /* .flex-center {
    display: flex;
  } */
  
</style>

<script>
import VuMap from '@/components/VuMap';

export default {
  components: {
    VuMap,
  },
  data() {
    return {
      mapId: 'basemap',
      center: [31, 122],
      marker: [31, 122],
      tileUrl: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    };
  }
}
</script>
