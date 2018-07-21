import React from 'react';
import ReactDOM from 'react-dom';

export default class FindMeImage extends React.Component {
       render() {
         return (
           <section className="fine-me-image">
               <img width={550} height={550} src={ require ('./images/client_1.jpg') } alt="thumbnail"/>
           </section>
         )
       }
  }
