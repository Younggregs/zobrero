import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import FindMeImage from './houses/Find Me Image.js'
import FindMeCliche from './houses/Find Me Cliche.js';


export default class Section0 extends React.Component {
      render() {
        return (
           <div className="section-3">

             <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <hr /><FindMeCliche/>
              </Col>
             </Row>

             <Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              <FindMeImage/>
              </Col>
             </Row>
           </div>
         )
     }
}
