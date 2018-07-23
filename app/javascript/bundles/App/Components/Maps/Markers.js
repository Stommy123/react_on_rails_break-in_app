const axios = require('axios');
const Features = require('./Feature');


const getReportMarkers = async (query) => {
  let reports = []
  let res = axios.get('/report.json');
  reports.push(res.data)
  return reports
}

const genFeatureCollection =  async (query)=> {
  let featureCollection = new Features.FeatureCollection();
  let ReportRes =  await getReportMarkers(query);
  ReportRes.forEach((report)=>{
    let markerLoc = [report.lon, report.lat];
    let newMarker = new Features.Feature(markerLoc, report.description, report.category);
    featureCollection.addFeature(newMarker)
  });
  return featureCollection
}

module.exports.genFeatureCollection = genFeatureCollection;
