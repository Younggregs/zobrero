import React from 'react';
import ReactDOM from 'react-dom';

export default class WorkImage extends React.Component {
       render() {
         return (
           <section className="work-image">
               <img width={550} height={550} src={ require ('./images/working_1.jpg') } alt="thumbnail"/>
           </section>
         )
       }
  }
