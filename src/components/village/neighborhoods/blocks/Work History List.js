import React from 'react'
import { Col, Media, Glyphicon } from 'react-bootstrap'
import ThreadImage from './houses/Thread Image.js'
import ThreadMessage from './houses/Thread Message.js'

export default class CallHistory extends React.Component {
       render() {
         return (
           <section className="call-history">
               <br /><br /><br />
               <Col lg={6} lgOffset={4} md={12} mdOffset={4} sm={12} xs={12}>
               <Media>

                <ThreadImage/>
                <Media.Body>
                <Media.Heading><p>Made Mrs Ellen(s) Hair</p></Media.Heading>
                <ThreadMessage/>
                </Media.Body>
                </Media><hr />
               </Col>


               <Col lg={6} lgOffset={4} md={12} mdOffset={4} sm={12} xs={12}>
               <Media>

                <ThreadImage/>
                <Media.Body>
                <Media.Heading><p>Made Mrs Ada(s) Hair too, twinnie lol</p></Media.Heading>
                <ThreadMessage/>
                </Media.Body>
                </Media><hr />
               </Col>
           </section>
         )
       }
  }
