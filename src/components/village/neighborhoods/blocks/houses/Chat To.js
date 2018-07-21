import React from 'react'

export default class ChatTo extends React.Component {
    
      render() {
       
        return (
           <span>
           <div className="chat-to">
               <p>{this.props.msg}</p> 
           </div>
           </span>
         )
     }
}
