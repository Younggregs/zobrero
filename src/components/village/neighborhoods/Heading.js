import React from 'react'
import { Grid , Row, Col } from 'react-bootstrap'
import FadeShow from './blocks/houses/Fade Show.js'
import Cliche from './blocks/houses/Cliche.js'


export default class Heading extends React.Component {
      render() {
        return (
           <div className="heading-show">
            <Grid>
             <Row>
              <Col lg={6} md={6} sm={12} xs={12}>
              <FadeShow/>
              </Col>
              <Col lg={6} md={6} sm={12} xs={12}>
              <Cliche/>
              </Col>
             </Row>
             <hr />

            <Row>
            <Col smHidden xsHidden>
             <p className="how-it-works">
                <a href="#section-1">How it works</a>
             </p>
            </Col>

            <Col lgHidden mdHidden>
             <p className="how-it-works-sm">
                <a href="#section-1">How it works</a>
             </p>
            </Col>
            </Row>

             <hr />
            </Grid>
           </div>
         )
     }
}
