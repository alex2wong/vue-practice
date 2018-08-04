
<style>
  .right-panel {
    position: absolute;
    width: auto;
    min-width: 300px;
    right: 0;
    z-index: 2;
    border-radius: 4px;
    background: #fff;
    box-shadow: -1px 0px 8px rgba(0,0,0,0.3);
  }
  .right-panel-header {
    line-height: 20px;
    padding: 10px;
    background: #666;
    color: #eee;
  }
  .right-panel-content {
    min-height: 100px;
    padding: 10px;
  }
</style>

<script>

export default {
  props: {
    title: {
      type: String,
      default: 'Panel Component',
    },
    data: {
      type: Object,
    },
    contentRender: {
      type: Function,
    },
  },
  beforeMount() {
    console.warn(`beforeMount, then create vm$el, virtual dom in memory,
     then insert it to DOM tree.`);
  },
  mounted() {
    console.warn(`mounted...`);
  },
  render(h) {
    let contentNode = (<div>default content</div>);
    if (this.contentRender) {
      contentNode = this.contentRender(h, this.data);
    }
    console.warn(`rendering...`);
    return (
      <div class="right-panel">
        <div class="right-panel-header">Panel Header</div>
        <div class="right-panel-content">
          {contentNode}
        </div>
      </div>
    );
  }
}

</script>
