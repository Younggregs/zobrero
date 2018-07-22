import React from 'react'
import { Button } from 'react-bootstrap'

export default class NotificationStatus extends React.Component {

    state = {
        statusList : [],
        status : 'All',
        statusNotifList: [],
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


    try {
        const res = await fetch('http://198.187.30.71:8000/notifs/');
        const statusNotifList = await res.json();
        this.setState({
          statusNotifList
        });
  
      } catch (e) {
        console.log(e);
  }    
}



async newStatus(id,status) {

    this.setState({status: status})

    try {
      const res = await fetch('http://198.187.30.71:8000/notifs/');
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

           </section>
         )
       }
  }
