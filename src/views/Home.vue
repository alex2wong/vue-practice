<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <SearchBar></SearchBar>
    <list-component></list-component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListComponent from '@/components/list-component.vue';
import SearchBar from '@/components/search-component.vue';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    ListComponent,
    SearchBar,
  },
})
export default class Home extends Vue {

}
</script>
