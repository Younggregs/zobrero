import React from 'react'
import { Col } from 'react-bootstrap'

export default class FadeShow extends React.Component {
       render() {
         return (
           <section className="fade-show">
            <Col lgHidden mdHidden>
            <div className="cliche-sm">
              <p>Get help fast, from someone near you!</p>
            </div>
             </Col>

             <Col smHidden xsHidden>
               <div className="space">
               </div>
             </Col>

              <img  width={900} height={600} alt="Phone repair image" src={ require ('./images/phonefix.jpg') } />

           </section>
         )
       }
  }
