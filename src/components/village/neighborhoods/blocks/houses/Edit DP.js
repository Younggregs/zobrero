import React from 'react'
import { Redirect } from 'react-router-dom'
import { Button,FormGroup, FormControl, HelpBlock } from 'react-bootstrap'
import Heading from './Heading'

export default class EditDP extends React.Component {


    state = {
        message : []
      }
    
      async update(){
    
        const auth = localStorage.getItem('auth_code')
    
        var fileField = document.querySelector("input[type='file']");
        
    
        var formData = new FormData()
        formData.append('profile_pic', fileField.files[0]);
      
      
        try {
          const res = await fetch('http://198.187.30.71:8000/reset_dp/', {
          
           body : formData,
           method: 'POST',
           credentials: 'same-origin',
           mode: 'cors',
           headers : {
             'Authorization' : 'Token ' + auth
           }
    
          })
          const message = await res.json();
            this.setState({
              message
            });
      
        } catch (e) {
          console.log(e);
        }
    
    }
    


render(){


const formInstance = (
  <section className="edit-profile-form">
  <Heading title="Reset Display Picture"/>


  <form>
  <FormGroup>
        <FormControl
            id="profile_pic"
            type="file"
            name="profile_pic"
            value={null}
        
        />
        <HelpBlock>An image of yourself would be great</HelpBlock>
</FormGroup>

{this.state.message.error_message ? (
      <p className="err-msg">{this.state.statement.error_message}</p>
    ) : (
      <span></span>
    )}

    {this.state.message.code ? ( 
       <span><Redirect to={`/profile/${ this.props.profile_id } `}/></span>
    ) : (
      <span></span>
    )}

    <Button onClick={this.update.bind(this)}>reset dp</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
