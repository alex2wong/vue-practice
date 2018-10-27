<template>
  <div>
    <input type="search" name="" id="" v-model="filterStr" placeholder="filter city by name">
  </div>
</template>
<style>

</style>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import store from '../store'; 
// import searchService from '@/components/search.service.ts';
 
@Component
export default class SearchBar extends Vue {

  onSearchKeyUp(evt: Event) {
    const value = (evt.target as HTMLInputElement).value;
    console.warn(`filter value: ${value}`);
    store.commit('updateFilterStr', value);
    this.$emit('search', value);
  }

  get filterStr() {
    return store.getters.filterStr;
  }
  
  set filterStr(newVal: string) {
    console.warn(`filter value: ${newVal}`);
    store.commit('updateFilterStr', newVal);
    this.$emit('search', newVal);
  }
}
</script>
