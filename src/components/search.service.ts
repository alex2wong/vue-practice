function searchCity(searchText: string, features: any) {
  for (let i = 0; i < features.length; i ++) {
    if (features[i].properties!.name.indexOf(searchText) > -1) return features[i];
  }
}

export default {
  searchCity,
};
