import React from 'react'
import ChatTable from './neighborhoods/blocks/houses/Chat Table'
import ChatClient from './neighborhoods/blocks/houses/Chat Client'
import ChatBox from './neighborhoods/blocks/houses/Chat Box'


export default class EHaggler extends React.Component {
  
  
      render() {
       
        return (
           <div>
                    <ChatClient client_id = {this.props.client_id}/>
                    <ChatTable client_id={this.props.client_id}/>
                    <ChatBox client_id={this.props.client_id}/>
           </div>
         )
     }
}
