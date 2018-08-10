import React from 'react';
import ReactDOM from 'react-dom';
import { Row, Col } from 'react-bootstrap';
import FindMeImage from './houses/Find Me Image.js'
import FindMeCliche from './houses/Find Me Cliche.js';


export default class Section0 extends React.Component {
      render() {
        return (
           <div className="section-0" id="section-0">

             <Row>
             <Col lg={4} lgOffset={1} md={4} mdOffset={1} sm={6} xs={6}>
                <FindMeCliche/>
              </Col>

              <Col lg={6} lgOffset={1} md={6} mdOffset={1} sm={6} xs={6}>
              <FindMeImage/>
              </Col>
             </Row>
           </div>
         )
     }
}
