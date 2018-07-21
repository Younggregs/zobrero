import React from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';

export default class Heading extends React.Component {
       render() {
         return (
           <section className="heading">
             <Col lg={6} md={6} sm={12} xs={12}>
             <br /><br /><p>{this.props.title}</p>
             </Col>
           </section>
         )
       }
  }
