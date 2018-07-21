import React from 'react';
import ReactDOM from 'react-dom';
import { Grid , Row, Col } from 'react-bootstrap';
import Heading from './blocks/houses/Heading'


export default class NotificationView extends React.Component {
      render() {
        return (
           <div className="notification-view">
             <Heading title="Notifications"/>
           </div>
         )
     }
}
