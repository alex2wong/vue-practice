<template>
  <div :id="id" class="vu-map">
    <slot name="marker"></slot>
    <slot name="line"></slot>
    <slot name="floor"></slot>
  </div>
</template>
<style>
  .vu-map {
    min-width: 300px;
    height: 300px;
  }
</style>
<script>
import L from 'leaflet';

export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    center: {
      type: Array,
      default: [0, 0],
    },
    zoom: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      // map: new L.map(this.id).setView(this.center, this.zoom),
    };
  },
  mounted() {
    const map = new L.map(this.id).setView(this.center, this.zoom);
    L.tileLayer('http://www.google.cn/maps/vt?pb=!1m5!1m4!1i{z}!2i{x}!3i{y}!4i256!2m3!1e0!2sm!3i342009817!3m9!2sen-US!3sCN!5e18!12m1!1e47!12m3!1e37!2m1!1ssmartmaps!4e0&token=32965').addTo(map);
    console.warn('Map Component mounted..', this.$slots.marker);
    
    this.$slots.marker.forEach(vnode => {
      // it is better using typed data, attrs.center must be array<number>
      L.marker(vnode.data.attrs.center).addTo(map)
        .bindPopup(vnode.children[0].text);
    }); 

  },
};
</script>
