import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import WorkImage from './houses/Work Image.js'
import WorkCliche from './houses/Work Cliche.js';


export default class Section2 extends React.Component {
      render() {
        return (
           <div className="section-2">
              <Col lg={6} md={6} sm={12} xs={12}>
               <WorkCliche/>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
               <WorkImage/>
              </Col>
           </div>
         )
     }
}
