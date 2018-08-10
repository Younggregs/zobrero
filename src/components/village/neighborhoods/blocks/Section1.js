import React from 'react'
import { Col, Row } from 'react-bootstrap'
import CallImage from './houses/Call Image'
import CallCliche from './houses/Call Cliche'


export default class Section1 extends React.Component {
      render() {
        return (
           <div className="section-1" id="section-1">
              <Col lg={4} lgOffset={2} md={4} mdOffset={2} sm={6} xs={6}>
               <CallImage/>
              </Col>

              <Col lg={4} lgOffset={2} md={4} mdOffset={2} smHidden xsHidden>
                <CallCliche/>
              </Col>

              <Col lgHidden mdHidden>
               <Row>
                <CallCliche/>
                 </Row>
              </Col>
           </div>
         )
     }
}
