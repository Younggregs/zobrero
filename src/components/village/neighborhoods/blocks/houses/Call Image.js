import React from 'react'

export default class CallImage extends React.Component {
       render() {
         return (
           <section className="call-image">
               <img width={550} height={550} src={ require ('./images/client_1.jpg') } alt="thumbnail"/>
           </section>
         )
       }
  }
