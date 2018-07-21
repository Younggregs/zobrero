import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import DoneImage from './houses/Done Image.js'
import DoneCliche from './houses/Done Cliche.js';


export default class Section3 extends React.Component {
      render() {
        return (
           <div className="section-3">

             <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <hr /><DoneCliche/>
              </Col>
             </Row>

             <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <DoneImage/>
              </Col>
             </Row>
           </div>
         )
     }
}
