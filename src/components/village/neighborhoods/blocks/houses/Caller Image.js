import React from 'react'

export default class CallerImage extends React.Component {
       render() {
         return (
           <section className="caller-image">
               <img width={70} height={70} src={ require ('./images/web developer.jpg') } alt="thumbnail"/>
           </section>
         )
       }
  }
