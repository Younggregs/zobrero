import React from 'react'
import { Link } from 'react-router-dom'
import {Navbar,Grid, Row, Col, Button, Glyphicon } from 'react-bootstrap'
import Messenger from './Messenger'

export default class Chat extends React.Component {

  state = {
    chat_list : [],
    show_chatbox: false,
    switch_state: true,
    client_id: null,
    chat_id: null,
    new_chat: null
  }

  async componentDidMount() {

    const auth = localStorage.getItem('auth_code')
    console.log(auth)



    try {
      const res = await fetch('http://198.187.30.71:8000/chatclients/', {

        headers : {
          'Authorization' : 'Token ' + auth,

        },

        });
      const chat_list = await res.json();

    } catch (e) {
      console.log(e);
    }
  }




  renderChat(){
    this.state.show_chatbox = true
    this.setState({ show_chatbox: true })
    this.switchState()
  }



  setParameters(chat_id,client_id){
    this.state.chat_id = chat_id
    this.state.client_id = client_id
  }


  switchState(){

    if (this.state.switch_state == false){
      this.state.switch_state = true
      this.setState({ switch_state : true })
    }else{
      this.state.switch_state = false
      this.setState({ switch_state : false })
    }

  }



  emptyResult(){

    var empty_set = false

    if(this.state.chat_list.length <= 0 ){
      empty_set = true
    }

    return empty_set


  }







      render(){

        return (
              <div className="chats">

                <Col lg={12} md={12} smHidden xsHidden>
                <Grid>
                <Row>
                <Navbar fixedTop>
                      <p className="chat-header">
                      <Link to="/home"><Glyphicon glyph="circle-arrow-left"/></Link>&nbsp;&nbsp;&nbsp;
                      Messenger</p>
                 </Navbar>
                 </Row>

                 <br /><br /><br />
                   <Row>
                  <Col lg={6} md={6} sm={12} xs={12}>
                  <Navbar>

                    <p className="chat-header">Chats</p>

                 </Navbar>
                  <div className="chat-list">
              {this.emptyResult() ? (
                  <p className="no-chat">No chat list yet</p>
              ) : (
                <span>

                {this.state.chat_list.map(item =>

                 <div className="chats">
                   <p><Button onClick={this.setParameters(item.chat_id, item.client_id)} onClick={this.renderChat.bind(this)}>{item.name}</Button></p>
                 </div>

               )}

                </span>
              )}



                  </div>
                 </Col>



                 <Col lg={6} md={6} smHidden xsHidden>

                    {this.props.match.params.profile_id ? (
                        <Messenger client_id={this.props.match.params.profile_id}/>
                      ) : (
                        <div>
                        { this.state.show_chatbox ? (
                          <Messenger chat_id={this.state.chat_id} client_id={this.state.client_id}/>

                           ):(
                              <p className="no-chat">No chats yet</p>

                       )}
                      </div>
                    )}

                </Col>
                 </Row>
                 </Grid>
                 </Col>


                  <Col sm={12} md={12} lgHidden mdHidden>
                  {this.state.switch_state ? (
                  <span>
                <Row>
                <Navbar fixedTop>
                      <p className="chat-header">
                      <Link to="/home"><Glyphicon glyph="circle-arrow-left"/></Link>&nbsp;&nbsp;&nbsp;
                      Messenger</p>
                 </Navbar>
                 </Row>

                 <br /><br /><br />
                   <Row>
                  <Col sm={12} xs={12} lgHidden mdHidden>
                  <Navbar>

                    <p className="chat-header" >Chats</p>

                 </Navbar>
              <div className="chat-list">
                {this.emptyResult() ? (
                  <p className="no-chat">No chat list yet</p>
                    ) : (
                <span>

                {this.state.chat_list.map(item =>

                 <div className="chats">
                   <p><Button onClick={this.setParameters(item.chat_id, item.client_id)} onClick={this.renderChat.bind(this)}>{item.name}</Button></p>
                 </div>

               )}

                </span>
              )}
                  </div>
                 </Col>
                 </Row>
                </span>
                 ) : (

                  <Row>
                   <Col sm={12} md={12} lgHidden mdHidden>



                    {this.props.match.params.profile_id ? (
                        <Messenger client_id={this.props.match.params.profile_id}/>
                      ) : (
                        <div>
                        { this.state.show_chatbox ? (
                          <Messenger chat_id={this.state.chat_id} client_id={this.state.client_id}/>

                           ):(
                              <p className="no-chat">No chats yet</p>

                       )}
                      </div>
                    )}



                  </Col>
                 </Row>


                 )}
                 </Col>

              </div>
         )
     }
}
