import React from 'react'
import { Row, Col } from 'react-bootstrap'
import ChatFrom from './Chat From'
import ChatTo from './Chat To'

export default class ChatTable extends React.Component {

  state = {
    messages : [],
  }

  auth = localStorage.getItem('auth_code')


  async componentDidMount() {

    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('http://198.187.30.71:8000/messenger/' + this.props.client_id + '/',{
         
        headers : {
         'Authorization' : 'Token ' + auth,
         
       },
     })
      const messages = await res.json();
      this.setState({
        messages
      });
    } catch (e) {
      console.log(e);
    }

    this.realTime()
  }

  async update() {


    try {
      const res = await fetch('http://198.187.30.71:8000/messenger/' + this.props.client_id + '/',{
         
        headers : {
         'Authorization' : 'Token ' + this.auth,
         
       },
     })
      const messages = await res.json();
      this.setState({
        messages
      });
    } catch (e) {
      console.log(e);
    }
  }

  realTime(){
    setInterval(() => this.update(), 2000);
  }

    
      render() {
       
        return (
           <div>
               
                 <Row>
                  <Col lg={12} md={12} smHidden xsHidden>
                  
                  <div className="chat-table">
                   { this.state.messages.map(item => 
                    <span>
                   { item.from_or_to ? (
                    <ChatFrom msg={item.msg}/>
                   ) : (
                    <ChatTo msg={item.msg}/>
                   )}

                   
                  </span>
                   )}
                  </div>

                  
                  
                  </Col>

                  <Col sm={12} xs={12} lgHidden mdHidden>
                  
                  <div className="chat-table-sm">
                   { this.state.messages.map(item => 
                    <span>
                   { item.from_or_to ? (
                    <ChatFrom msg={item.msg}/>
                   ) : (
                    <ChatTo msg={item.msg}/>
                   )}

                   
                  </span>
                   )}
                  </div>


                  
                  
                  </Col>

                 </Row>
               
           </div>
         )
     }
}
