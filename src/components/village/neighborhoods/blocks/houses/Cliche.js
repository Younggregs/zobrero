import React from 'react'
import { Col } from 'react-bootstrap'

export default class Cliche extends React.Component {
       render() {
         return (
           <section >
           <Col smHidden xsHidden>
           <div className="cliche">
             <p>Get help from someone near you</p>
           </div>
           </Col>

           <Col lgHidden mdHidden>
           <div className="cliche-sm">
             <p>Get help from someone near you</p>
           </div>
           </Col>
           </section>
         )
       }
  }
