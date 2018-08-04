<template>
  <div class="content-container a-flexbox">
    <div class="content a-flex">
      <span>Left Table</span>
      <div class="btn" @click="togglePanel">toggle Panel</div>
    </div>
    <div class="panel-container" style="flex: 0 1;">
      <right-panel v-if="isVisible" :data="data[0]" :contentRender="contentRender"></right-panel>
    </div>
  </div>
</template>
<style >
  .content-container {
    width: 100%;
    height: 100%;
    background: #eee;
  }
  .content {
    padding: 100px;
  }
  .panel-container {
    height: 100%;
    position: relative;
  }
  .a-flexbox--column {
    flex-direction: column;
  }
  .a-flex--center-item {
    align-items: center;
  }

  .btn {
    padding: 10px;
    max-width: 140px;
    background: #fff;
    border: 1px solid #ddd;
  }
  .btn:active {
    background: #eee;
    transition: background .1s;
  }

</style>

<script>
import { default as RightPanel } from '@/components/right-panel/right-panel';

export default {
  components: {
    RightPanel,
  },
  data() {
    return {
      isVisible: true,
      data: [
        {
          'app': 'DNS Protocol',
        },
      ],
    };
  },
  methods: {
    contentRender (h, data) { 
      return (<div>Current Data: {data['app']}</div>); 
    },
    togglePanel() {
      this.isVisible = !this.isVisible;
    }
  }
}
</script>
