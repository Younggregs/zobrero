import React from 'react'
import { Image } from 'react-bootstrap'

export default class WorkImage extends React.Component {
       render() {
         return (
          <section className="image-animation">

               <Image src={ require ('./images/working_1.jpg') } alt="thumbnail" responsive/>

           </section>
         )
       }
  }
