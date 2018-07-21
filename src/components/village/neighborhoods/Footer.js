import React from 'react';
import ReactDOM from 'react-dom';
import { Grid , Row, Col } from 'react-bootstrap';
import About from './blocks/houses/About.js'
import Copyright from './blocks/houses/Copyright.js';
import GotoTop from './blocks/houses/Goto Top.js';

export default class Footer extends React.Component {
      render() {
        return (
           <div className="footer">
            <GotoTop/>
            <Grid>
             <Row>
              <About/>
             </Row>
            </Grid>
            <Copyright/>
           </div>
         )
     }
}
