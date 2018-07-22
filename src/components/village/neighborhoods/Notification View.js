import React from 'react'
import NotificationStatus from './blocks/houses/Notification Status'


export default class NotificationView extends React.Component {
      render() {
        return (
           <div className="notification-view">
             <NotificationStatus/>
           </div>
         )
     }
}
