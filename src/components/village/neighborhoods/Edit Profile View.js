import React from 'react'
import EditPhone from './blocks/houses/Edit Phone'
import EditPassword from './blocks/houses/Edit Password'
import EditDP from './blocks/houses/Edit DP'

export default class EditProfileForm extends React.Component {

render(){

    return (

       <section className="edit-profile-form">

       <EditPhone profile_id = {this.props.profile_id}/>
       <EditPassword profile_id = {this.props.profile_id}/>
       <EditDP profile_id = {this.props.profile_id}/>

       </section>
      

    )
  }
}
