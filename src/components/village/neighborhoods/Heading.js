import React from 'react'
import { Grid , Row, Col } from 'react-bootstrap'
import FadeShow from './blocks/houses/Fade Show'
import Cliche from './blocks/houses/Cliche'


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
            </Grid>
           </div>
         )
     }
}
