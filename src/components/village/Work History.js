import React from 'react';
import ReactDOM from 'react-dom';
import { Grid , Row, Col } from 'react-bootstrap';
import HomeNavigation from './neighborhoods/Home Navigation.js';
import WorkHistoryView from './neighborhoods/Work History View.js';

export default class WorkHistory extends React.Component {
      render() {
        return (
           <div className="work-history">
             <HomeNavigation/><br />
             <WorkHistoryView/>
           </div>
         )
     }
}
