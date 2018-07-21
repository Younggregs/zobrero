import React from 'react';
import ReactDOM from 'react-dom';
import { Grid , Row, Col } from 'react-bootstrap';
import Section0 from './blocks/Section0.js';
import Section1 from './blocks/Section1.js'
import Section2 from './blocks/Section2.js';
import Section3 from './blocks/Section3.js';


export default class Illustration extends React.Component {
      render() {
        return (
           <div className="Illustration">
            <Grid>
            <Section0/>
             <Row>
              <Section1/>
             </Row>
             <Row>
              <Section2/>
             </Row>
              <Section3/>
            </Grid>
           </div>
         )
     }
}
