import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import WorkImage from './houses/Work Image.js'
import WorkCliche from './houses/Work Cliche.js';


export default class Section2 extends React.Component {
      render() {
        return (
           <div className="section-2">
              <Col lg={4} lgOffset={1} md={4} mdOffset={1} sm={6} xs={6}>
               <WorkCliche/>
              </Col>
              <Col lg={4} lgOffset={1} md={4} mdOffset={1} sm={6} xs={6}>
               <WorkImage/>
              </Col>
           </div>
         )
     }
}
