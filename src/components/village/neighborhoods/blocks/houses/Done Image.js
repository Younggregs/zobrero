import React from 'react'

export default class DoneImage extends React.Component {
       render() {
         return (
           <section className="done-image">
               <img width={550} height={550} src={ require ('./images/handshake_1.jpg') } alt="thumbnail"/>
           </section>
         )
       }
  }
