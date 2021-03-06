import React from 'react'
import { login } from './auth/Auth'
import { Link , Redirect} from 'react-router-dom'
import { Col, Row, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

export default class SignupForm extends React.Component {

  state = {
    statement : []
  }

  async submitForm(){    

    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value

    

    var formData = new FormData()
    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('email', email)
    formData.append('password', password)
   


    try {
      const res = await fetch('http://198.187.30.71:8000/accounts/', {
      
       body :formData,
       method: 'POST',
      
    
      });
      const statement = await res.json();
      this.setState({
        statement
      });

    } catch (e) {
      console.log(e);
    }


    login(email, password)

  }


render(){

  function FieldGroup({ id, label, help, ...props }) {
    return (
      <FormGroup controlId={id}>
        <ControlLabel>{label}</ControlLabel>
        <FormControl {...props} />
        {help && <HelpBlock>{help}</HelpBlock>}
      </FormGroup>
  );
}

const formInstance = (
  <section className="signup-form">

  <Link to="/">
   <div className="tag-name">Zobrero</div>
  </Link>

  <span>
  <Col lg={4} md={4} sm={3} xs={3}>
  <Link to="/signin">
    <Button>Signin</Button>
  </Link>
  </Col>

<Col lg={4} md={4} sm={3} xs={3}>
  <Link to="/signup">
    <Button bsStyle="success">Signup</Button>
  </Link>
</Col>

<Col lg={4} md={4} sm={3} xs={3}>
  <Link to="/signup_obrero">
    <Button>Signup as worker</Button>
  </Link>
</Col>

  </span>

  <form>
<Row>
   <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="firstname"
      type="text"
      label="Firstname"
      name="firstname"
      placeholder="firstname"
    />
   </Col>

   <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="lastname"
      type="text"
      label="Lastname"
      name="lastname"
      placeholder="Lastname"
    />
    </Col>
</Row>

<Row>
  <Col lg={6} md={6} sm={12} xs={12}>
    <FieldGroup
      id="email"
      type="email"
      label="Email address"
      name="email"
      placeholder="example@gmail.com"
    />
  </Col>

  <Col lg={6} md={6} sm={6} xs={12}>
    <FieldGroup 
    id="password" 
    label="Password" 
    type="password" 
    name="password"/>
  </Col>
</Row>

<Row>
  <Col lg={6} md={6} sm={6} xs={6}>
   {this.state.statement.message ? (
      <p className="err-msg">{this.state.statement.message}</p>
    ) : (
      <span></span>
    )}

    {this.state.statement.code ? ( 
       <span><Redirect to='/home'/></span>
    ) : (
      <span></span>
    )}

  </Col>  
</Row>

<Row>
  <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={6} xs={12}>
    <Button bsStyle="success" onClick={this.submitForm.bind(this)}>Sign up</Button>
  </Col>
</Row>
  </form>
  </section>
);

    return (formInstance);
  }
}
