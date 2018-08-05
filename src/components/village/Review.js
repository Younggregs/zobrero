import React from 'react'
import HomeNavigation from './neighborhoods/Home Navigation.js'
import ReviewView from './neighborhoods/Review View.js'

export default class Review extends React.Component {
      render() {
        return (
           <div className="review-view">
             <HomeNavigation/><br />
             <ReviewView/>
           </div>
         )
     }
}
