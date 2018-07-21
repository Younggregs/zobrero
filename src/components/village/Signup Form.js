import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Form, Button,FormGroup, FormControl, ControlLabel, HelpBlock ,Row,Col} from 'react-bootstrap';

export default class SignupForm extends React.Component {

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
    <p>Iwansell</p>
  </Link>

  <span>
  <Link to="/Signin">
    <Button>Signin</Button>
  </Link>

  <Link to="/Signup">
    <Button>Signup</Button>
  </Link>
  </span>

  <form method="post" action="http://127.0.0.1:8000/accounts/">
  <Row>
   <Col lg={6} md={6} sm={6} xs={6}>
    <FieldGroup
      id="formControlsText"
      type="text"
      label="Firstame"
      name="firstname"
      placeholder="Lastname"
    />
    </Col>

    <Col lg={6} md={6} sm={6} xs={6}>
      <FieldGroup
        id="formControlsText"
        type="text"
        label="Lastame"
        name="lastname"
        placeholder="Firstname"
      />
    </Col>
  </Row>

    <FieldGroup
      id="formControlsEmail"
      type="email"
      label="Email address"
      name="email"
      placeholder="example@gmail.com"
    />

    <FieldGroup id="formControlsPassword" label="Password" type="password" name="password"/>

    <Button type="submit">Sign up</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
