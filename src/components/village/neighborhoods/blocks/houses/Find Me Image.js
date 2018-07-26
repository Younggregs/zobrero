import React from 'react';
import { Image } from 'react-bootstrap'

export default class FindMeImage extends React.Component {
       render() {
         return (
           <section className="profile-image">
            <div class="image">
               <Image src={ require ('./images/search-field.jpg') } alt="thumbnail" responsive/>
            </div>
          </section>
         )
       }
  }
 
