import React, { Component } from 'react'
import Map from './Map';
import ReportModal from '../Reports/Report';
import Nav from '../NavBar.js'


const Places = () => (
    <div className="mapConsolidate">
      <Nav />
      <div className="bottomModule" />
      <Map />
      <ReportModal/>
    </div>

)

export default Places;