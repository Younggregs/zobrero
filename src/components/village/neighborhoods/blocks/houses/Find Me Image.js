import React from 'react';
import { Image } from 'react-bootstrap'

export default class FindMeImage extends React.Component {

       render() {
         return (
           <section className="image-animation">
               <Image src={ require ('./images/search.png') } alt="thumbnail" responsive/>
          </section>
         )
       }
  }
 
