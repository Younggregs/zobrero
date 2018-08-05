import React from 'react'
import { Col } from 'react-bootstrap'
import CallImage from './houses/Call Image.js'
import CallCliche from './houses/Call Cliche.js'


export default class Section1 extends React.Component {
      render() {
        return (
           <div className="section-1" id="section-1">
              <Col lg={6} md={6} sm={12} xs={12}>
              <CallImage/>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
              <CallCliche/>
              </Col>
           </div>
         )
     }
}
