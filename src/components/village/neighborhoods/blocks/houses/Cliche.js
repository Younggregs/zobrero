import React from 'react'
import { Col, Row } from 'react-bootstrap'

export default class Cliche extends React.Component {
       render() {
         return (
           <section >

          <Row>
           <Col smHidden xsHidden>
           <div className="cliche">
             <p>Get help fast, from someone near you!</p>
           </div>
           </Col>
          </Row>

          <Row>
            <Col smHidden xsHidden>
             <p className="how-it-works">
                <a href="#section-0">How it works</a>
             </p>
            </Col>

            <Col lgHidden mdHidden>
             <p className="how-it-works-sm">
                <a href="#section-0">How it works</a>
             </p>
            </Col>
          </Row>
           </section>
         )
       }
  }
