import React from 'react'
import { Row } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'
import Obrero from './blocks/Obrero.js'

export default class RecentActivity extends React.Component {
       render() {
         return (
           <section className="recent-activity">
            
              <Row>
                <Heading title={this.props.title}/>
              </Row>
               <Row>
                 <Obrero/>
              </Row>
             
           </section>
         )
       }
  }
