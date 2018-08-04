import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import BaseMap from '@/modules/Map-page';
import PanelDemo from '@/modules/Panel-page';
import ModuleDemo from '@/modules/Module-test';
import Dashboard from '@/modules/Dashboard';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Dashboard,
    },
    {
      path: '/map',
      name: 'BaseMap',
      component: BaseMap,
    },
    {
      path: '/panel',
      name: 'Panel',
      component: PanelDemo,
    }
  ],
});
