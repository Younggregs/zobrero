import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col } from 'react-bootstrap'

export default class CrossRoads extends React.Component {
       render() {
         return (
           <section className="cross-roads">
           {this.props.calls ? (
             <span>
               <Col lg={6} md={6} sm={6} xs={6}>
              <Link to='/calls'>
               <Button bsStyle="success">Call History</Button>
              </Link>
             </Col>

             <Col lg={6} md={6} sm={6} xs={6}>
             <Link to='/chats'>
               <Button>Chats</Button>
              </Link>
             </Col>
            </span>

           ) : (
            <span>
            <Col lg={6} md={6} sm={6} xs={6}>
              <Link to='/calls'>
               <Button>Call History</Button>
              </Link>
             </Col>

             <Col lg={6} md={6} sm={6} xs={6}>
             <Link to='/chats'>
               <Button bsStyle="success">Chats</Button>
              </Link>
             </Col>
             </span>

           )}
             
           </section>
         )
       }
  }
