import React from 'react'

export default class ThreadImage extends React.Component {
       render() {
         return (
           <section className="thread-image">
               <img width={450} height={450} src={ require ('./images/hairbraider.jpg') } alt="thumbnail"/>
           </section>
         )
       }
  }
