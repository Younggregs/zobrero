import React from 'react'
import { Link } from 'react-router-dom'
import { Row } from 'react-bootstrap'
import BuzzMe from './Buzz Me'

export default class ProfileInfo extends React.Component {
       render() {
         return (
           <section className="profile-info">
              <Row>
               <p>I am {this.props.firstname} {this.props.lastname}</p>
               <p>{this.props.talent}</p>
              </Row>
               <Row>
              
                <Link to={`/appointment/${ this.props.id } `}>
                create appointment</Link> &nbsp;&nbsp;&nbsp;
               
                <Link to={`/chat/${ this.props.id } `}>
                message me</Link>
                  
                  
                <BuzzMe phone={this.props.phone}/>
                  
               </Row>
           </section>
         )
       }
  }
