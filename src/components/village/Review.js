import React from 'react';
import ReactDOM from 'react-dom';
import { Grid , Row, Col } from 'react-bootstrap';
import HomeNavigation from './neighborhoods/Home Navigation.js';
import ReviewView from './neighborhoods/Review View.js';

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
