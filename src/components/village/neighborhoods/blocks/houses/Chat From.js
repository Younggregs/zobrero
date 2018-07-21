import React from 'react'

export default class ChatFrom extends React.Component {
    
      render() {
       
        return (
           <span>
           <div className="chat-from">
               <p>{this.props.msg}</p> 
           </div>
           </span>
         )
     }
}
