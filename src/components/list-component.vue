<style>
  .city-items li {
    /* max-width: 220px; */
    list-style: none;
    text-align: left;
  }
  .city-items li:hover {
    cursor: pointer;
    background: lightblue;
  }
</style>
<script lang="tsx">
import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios';
import geojson from 'geojson';
import Chart from 'chart.js';
import store from '../store';
 
@Component
export default class ListComponent extends Vue{
  items: Item[] = [];
  loading = false;

  @Watch('filterStr')
  updateFiltered() {
    console.warn(`filterStr changed to ${this.filterStr}`);
    this.items = store.getters.getFeatures(this.filterStr); 
  }

  get filterStr() {
    return store.getters.filterStr;
  }

  mounted() {
    // fetch the features, each time keyUp -> searchCity
    // http://192.168.1.103:8081
    axios.get('http://192.168.1.104:8081/places_simple.json').then((res: any) => {
      if (res.data && 'features' in res.data) {
        if (store.getters.getFeatures() == res.data.features) return;
        store.commit('updateFeatures', res.data.features);
        this.updateFiltered();
        this.loading = false;
      }
    });
    this.loading = true;
    // if we already have an app shared city list, do not show blocking loading..
    this.updateFiltered();
    console.warn(`got latest filtered result ${this.items.length} items`);
  }

  render(h: CreateElement): VNode {
    const listNode = (<ul class="city-items"></ul>) as VNode;
    listNode.children = [];
    this.items.forEach((item: Item, i) => {
      if (item.properties) {
        listNode.children!.push(<li key={i}> {i}.  {item.properties.name} </li>);
      } else {
        listNode.children!.push(<li key={i}> {i}.  {item.name} </li>);
      }
    });
    const loadNode = (<p>loading...</p>) as VNode;
    if (this.loading) return (<div>{loadNode}{listNode}</div>) as VNode;
    return listNode;
  }

  filter() {
    return {
      capital: (str: string) => {
        str.toUpperCase();
      },
    }
  }
}

export interface Item {
  _index: number;
  name: string;
  desc?: string;
  properties?: {
    name: string;
  };
}
</script>
