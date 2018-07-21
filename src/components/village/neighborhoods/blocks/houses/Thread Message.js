import React from 'react';
import ReactDOM from 'react-dom';

export default class ThreadMessage extends React.Component {
       render() {
         return (
           <section className="thread-message">
               <p>{this.props.thread}</p>
           </section>
         )
       }
  }
