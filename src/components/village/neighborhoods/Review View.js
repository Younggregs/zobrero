import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'
import Thread from './blocks/Thread.js'

export default class ReviewView extends React.Component {
       render() {

         return (
           <section className="thread">

           <Grid>
           <Row>
            <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
             <Heading title="Reviews"/>
            </Col>
           </Row>
            <Row>
              <Thread thread="Review threads goes here"/>
            </Row>
           </Grid>

           </section>
         )
       }
  }
