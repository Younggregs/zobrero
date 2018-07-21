import React from 'react';
import ReactDOM from 'react-dom';

export default class ProfileInfo extends React.Component {
       render() {
         return (
           <section className="profile-info">

               <p>I am {this.props.firstname} {this.props.lastname}</p>
               <p>{this.props.talent}</p>
           </section>
         )
       }
  }
