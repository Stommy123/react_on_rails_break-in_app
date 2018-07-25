class FeatureCollection {
  constructor(){
    this.type = 'FeatureCollection';
    this.features = [];
  }
  addFeature(feature) {
    this.features.push(feature);
  }
}

class Feature {
  constructor(coords, title, category){
    this.type = 'Feature';
    this.geometry = {
      type: 'Point',
      coordinates: coords
    };
    this.properties = {
      title: title,
      category: category
    }
  }
}

module.exports.Feature = Feature;
module.exports.FeatureCollection = FeatureCollection;
