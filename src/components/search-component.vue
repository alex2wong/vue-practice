<template>
  <div>
    <input type="search" name="" id="" v-model="filterStr" @keyup="onSearchKeyUp" placeholder="filter city by name">
  </div>
</template>
<style>

</style>
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
// import searchService from '@/components/search.service.ts';
import store from './store';
 
@Component
export default class SearchBar extends Vue {

  filterStr = store.getFilter();
  onSearchKeyUp(evt: Event) {
    const value = (evt.target as HTMLInputElement).value;
    store.updateFilter(value);
    this.$emit('search', value);
  }
}
</script>
