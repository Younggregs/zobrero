import React from 'react'
import { Link } from 'react-router-dom'
import {Image, Glyphicon} from 'react-bootstrap'

export default class ChatDP extends React.Component {
       render() {
         return (
           <section className="chat-dp">
            {this.props.go_back ? (
              <div>
              <Link to="/chats">
                <span className="glyphs"><Glyphicon glyph="arrow-left"/></span>
              </Link>&nbsp;&nbsp;
                <Image width="50px" height="50px" src={ require ('./images/barber.jpg') } alt="display-pic"/>
                &nbsp;&nbsp;
              {this.props.name}
              </div>
            ) : (
               <div>
              <Image width="50px" height="50px" src={ require ('./images/barber.jpg') } alt="display-pic"/>
              &nbsp;&nbsp;
              {this.props.name}
              </div>
            )}
               
           </section>
         )
       }
  }
