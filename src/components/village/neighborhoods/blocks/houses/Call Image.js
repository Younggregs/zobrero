import React from 'react';
import { Image } from 'react-bootstrap'

export default class CallImage extends React.Component {
       render() {
         return (
          <section>

               <Image src={ require ('./images/appointment.png') } alt="thumbnail" responsive/>

          </section>
         )
       }
  }
