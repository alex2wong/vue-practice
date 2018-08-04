<template>
  <div id="app">
    <p>
      <!-- <router-link> render to  `<a>` tag-->
      <router-link to="/">Hello Component</router-link>
      <router-link to="/map">Leaflet Component</router-link>
      <router-link to="/panel">Panel Component</router-link>
    </p>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  font-size: 13px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
