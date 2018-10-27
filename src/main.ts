import Vue from 'vue'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker'
Vue.config.productionTip = false
console.warn(`called use(Vuex)`);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
