import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Col, Media, Glyphicon } from 'react-bootstrap';
import ThreadDP from './houses/Thread D P.js';
import ThreadMessage from './houses/Thread Message.js';

export default class Thread extends React.Component {
       render() {
         return (
           <section className="obrero">
               <br />
               <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
               <Media>
                <Media.Left>
                <ThreadDP/>
                </Media.Left>
                <Media.Body>
                <Media.Heading><p>Evelyn Einstein</p></Media.Heading>
                <ThreadMessage thread={this.props.thread}/>
                </Media.Body>
                </Media><hr />
               </Col>


           </section>
         )
       }
  }
