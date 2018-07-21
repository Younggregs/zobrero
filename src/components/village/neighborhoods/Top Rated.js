import React from 'react'
import { Row } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'
import Obrero2 from './blocks/Obrero 2.js'

export default class TopRated extends React.Component {
       render() {
         return (
           <section className="top-rated">
             
              <Row>
                <Heading title={this.props.title}/>
              </Row>
               <Row>
                 <Obrero2/>
              </Row>
            
           </section>
         )
       }
  }
