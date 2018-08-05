import React from 'react'
import HomeNavigation from './neighborhoods/Home Navigation.js'
import NotificationView from './neighborhoods/Notification View.js'


export default class Notification extends React.Component {
      render() {
        return (
           <div className="notification">
             <HomeNavigation/>
             <NotificationView/>
           </div>
         )
     }
}
