import React from 'react'
import {Navbar, Row, Col } from 'react-bootstrap'
import ChatDP from './Chat DP'

export default class ChatClient extends React.Component {

  state = {
    client_info : {}
  }



  async componentDidMount() {
    try {
      const res = await fetch('http://198.187.30.71:8000/accounts/' + this.props.client_id);
      const client_info = await res.json();
      this.setState({
        client_info
      });
    } catch (e) {
      console.log(e);
    }
  }

  clientName(){
    var name = this.state.client_info.firstname + ' ' + this.state.client_info.lastname

    return name
  }

      render(){
       
        return (
          <Row>
          <Col smHidden xsHidden>
                  <Navbar>
                   <Navbar.Header>
                    <ChatDP name={this.clientName()}/>
                  </Navbar.Header>
                 </Navbar>
          </Col>

          <Col lgHidden mdHidden>
                  <Navbar fixedTop>
                   <Navbar.Header>
                    <ChatDP go_back ={true} name={this.clientName()}/>
                  </Navbar.Header>
                 </Navbar>
          </Col>
          </Row>
         )
     }
}
