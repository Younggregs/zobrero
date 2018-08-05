import React from 'react'
import { Grid, Row, Col, Glyphicon } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'
import WorkHistoryList from './blocks/Work History List.js'

export default class WorkHistoryView extends React.Component {
       render() {

         return (
           <section className="favorite-workers-view">
           <Grid>
           <Row>
            <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
             <Heading title="What i have done"/>
            </Col>
           </Row>
            <Row>
              <WorkHistoryList/>
            </Row>
           </Grid>

           </section>
         )
       }
  }
