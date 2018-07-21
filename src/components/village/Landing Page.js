import React from 'react';
import ReactDOM from 'react-dom';
import { Grid , Row, Col } from 'react-bootstrap';
import Navigation from './neighborhoods/Navigation.js';
import Heading from './neighborhoods/Heading.js';
import Illustration from './neighborhoods/Illustration.js';
import Footer from './neighborhoods/Footer.js';

export default class LandingPage extends React.Component {
      render() {
        return (
           <div className="landing-page">
             <Navigation/><br />
             <Heading/><br /><br />
             <Illustration/><br /><br />
             <Footer/>
           </div>
         )
     }
}
