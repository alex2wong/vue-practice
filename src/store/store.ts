import geojson from 'geojson';

let gStore = {
  status: {
    features: [],
    filterStr: '',
  },
  actions: {
    getFeatures: (name?: string) => {
      if (name === undefined || name === '') {
        return gStore.status.features;
      }
      const res = gStore.status.features.filter((feature: any) => {
        if (feature.properties) {
          if (feature.properties.name.toUpperCase().indexOf(name.toUpperCase()) > -1) {
            return feature;
          }
        }
      });
      return res;
    },
    updateFeatures: (features: any) => {
      gStore.status.features = features;
      return 1;
    },
    getFilter: () => {
      return gStore.status.filterStr;
    },
    updateFilter: (filterStr: string) => {
      gStore.status.filterStr = filterStr;
      return 1;
    },
  }
}

export default {
  getFeatures: gStore.actions.getFeatures,
  updateFeatures: gStore.actions.updateFeatures,
  getFilter: gStore.actions.getFilter,
  updateFilter: gStore.actions.updateFilter,
};
