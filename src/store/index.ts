import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

console.warn(`instance Vuex.Store..`);
export default new Vuex.Store({
  state: {
    features: [],
    filterStr: '',
  },
  getters: {
    getFeatures: (state) => (filterStr: string) => {
      if (filterStr === undefined || filterStr === '') {
        return state.features;
      }
      return state.features.filter((feature: any) => {
        if (feature.properties) {
          if (feature.properties.name.toUpperCase().indexOf(filterStr.toUpperCase()) > -1) {
            return feature;
          }
        }
      });
    },
    filterStr: state => {
      return state.filterStr;
    },
  },
  mutations: {
    // make sure totally replace state.obj.. trigger change.
    updateFeatures(state, features) {
      console.warn(`received payload len: ${features.length}`);
      // Vue.set(obj, 'newProp', 123). or state.obj = { ...state.obj, { newProp: 123 }};
      state.features = features.concat();
    },
    updateFilterStr(state, filterStr) {
      state.filterStr = filterStr;
    },
  }
})
