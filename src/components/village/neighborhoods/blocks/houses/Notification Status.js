import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Row } from 'react-bootstrap'

export default class NotificationStatus extends React.Component {

    state = {
        statusList : [],
        status : 'All',
        appointmentRegister: [],
        media: null
    }

    async componentDidMount(){    

        try {
          const res = await fetch('http://198.187.30.71:8000/status/');
          const statusList = await res.json();
          this.setState({
            statusList
          });
    
        } catch (e) {
          console.log(e);
    }    

    const auth = localStorage.getItem('auth_code')

    try {
        const res = await fetch('http://198.187.30.71:8000/appointment_register/all', {

          headers : {
            'Authorization' : 'Token ' + auth
          }

        });
        const appointmentRegister = await res.json();
        this.setState({
          appointmentRegister
        });
  
      } catch (e) {
        console.log(e);
  }    
}



async newStatus(id,status) {

    this.setState({status: status})
    
    const auth = localStorage.getItem('auth_code')

    try {
      const res = await fetch('http://198.187.30.71:8000/appointment_register/' + this.state.status, {

        headers : {
          'Authorization' : 'Token ' + auth
        }


      });
      const categoryProductList = await res.json();
      this.setState({
        categoryProductList
      });
    } catch (e) {
      console.log(e);
    }

}



  setMedia(media_name){
    this.state.media = 'http://198.187.30.71:8000/media/' + media_name
  }


       render() {
         return (
        <section className="notif-status">
        <Row>
          <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>

        <div class="scrolling-wrapper">
            <div class="card">
                <Button onClick={this.newStatus.bind(this, 99,"All")}>All</Button>
            </div>
           {this.state.statusList.map(item => (
             <div class="card">
               <Button onClick={this.newStatus.bind(this, item.id, item.status)}>{item.status}</Button>
             </div>
           ))}
        </div>
        
        <div className="notif-title">
           <p>{this.state.status} appointments</p>
        </div>
          
           </Col>
           </Row>

           <Row>
           <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              {this.state.appointmentRegister.map(item => (
                <div>
                  <p><Link to={`/profile/${ item.client_id } `}>
                    Client : {item.client}
                  </Link></p>
                  <p>Task : {item.task}</p>
                  <p>Description : {item.description}</p>
                  <p>Status : {item.status}</p>
                  <p>Date-Time: {item.date_time}</p>
                </div>
              ))}
           </Col>
           </Row>
           </section>
         )
       }
  }
  