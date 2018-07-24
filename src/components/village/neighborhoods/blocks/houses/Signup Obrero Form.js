import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Col, Row, Form, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap';
import { login } from './auth/Auth'

export default class SignupForm extends React.Component {

  state = {
      categorylist: [],
      talentlist_1: [],
      talentlist_2: [],
      category_id: 0,
      statement: []
    };

    async componentDidMount() {
      try {
        const res = await fetch('http://198.187.30.71:8000/talent_category/');
        const categorylist = await res.json();
        this.setState({
          categorylist
        });
      } catch (e) {
        console.log(e);
      }
    }

  async getTalentsOne(){

    try {
      const res = await fetch('http://198.187.30.71:8000/all_talents/' + this.state.category_id);
      const talentlist_1 = await res.json();
      this.setState({
        talentlist_1
      });
    } catch (e) {
      console.log(e);
    }




  }




    setCategoryIdOne(cat_id){
        this.state.category_id = cat_id;
        this.getTalentsOne();
    }

    getCategoryIdOne(){
      var e = document.getElementById("category_1");
      var cat_id = e.options[e.selectedIndex].value;

      this.setCategoryIdOne(cat_id);

    }




    async getTalentsTwo(){

      try {
        const res = await fetch('http://198.187.30.71:8000/all_talents/' + this.state.category_id);
        const talentlist_2 = await res.json();
        this.setState({
          talentlist_2
        });
      } catch (e) {
        console.log(e);
      }

    }




      setCategoryIdTwo(cat_id){
          this.state.category_id = cat_id
          this.getTalentsTwo();
      }

      getCategoryIdTwo(){
        var e = document.getElementById("category_2");
        var cat_id = e.options[e.selectedIndex].value;

        this.setCategoryIdTwo(cat_id);

  }



  async submitForm(){

    var firstname = document.getElementById("firstname").value
    var lastname = document.getElementById("lastname").value
    var email = document.getElementById("email").value
    var password = document.getElementById("password").value
    var whatdoyoudo = document.getElementById("whatdoyoudo").value
    var whatcanyoudo = document.getElementById("whatcanyoudo").value



    var formData = new FormData()
    formData.append('firstname', firstname)
    formData.append('lastname', lastname)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('whatdoyoudo', whatdoyoudo)
    formData.append('whatcanyoudo', whatcanyoudo)



    try {
      const res = await fetch('http://198.187.30.71:8000/add_employee/', {

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
    <Button>Signup</Button>
  </Link>
</Col>

<Col lg={4} md={4} sm={3} xs={3}>
  <Link to="/signup_obrero">
    <Button bsStyle="success">Signup as worker</Button>
  </Link>
</Col>

  </span>

  <form>

<Row>
   <Col lg={6} md={6} sm={6} xs={12}>
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


 <Col lg={6} md={6} sm={12} xs={12}>
    <FormGroup>
      <ControlLabel>What Do You Do</ControlLabel>
               <FormControl
               id="category_1"
               componentClass="select"
               placeholder="select"
               onChange={this.getCategoryIdOne.bind(this)}>
        <option value="0">Select category</option>
        {this.state.categorylist.map(item => (

        <option value={item.id}>{item.category}</option>

              ))}
      </FormControl>


             <FormControl componentClass="select" placeholder="select" name="whatdoyoudo" id="whatdoyoudo">
               <option value="0">Select specialty</option>
               {this.state.talentlist_1.map(item => (

                 <option value={item.id}>{item.talent}</option>

              ))}
             </FormControl>
           </FormGroup>

</Col>
</Row>

<Row>
<Col lg={6} md={6} sm={12} xs={12}>

    <FormGroup>
    <ControlLabel>What Can You Do</ControlLabel>
    <FormControl id="category_2" componentClass="select" placeholder="select" onChange={this.getCategoryIdTwo.bind(this)}>
    <option value="0">Select category</option>
    {this.state.categorylist.map(item => (

      <option value={item.id}>{item.category}</option>

   ))}
    </FormControl>

  <FormControl componentClass="select" placeholder="select" multiple name="whatcanyoudo" id="whatcanyoudo">
    <option value="0">Select specialty</option>
    {this.state.talentlist_2.map(item => (

      <option value={item.id}>{item.talent}</option>

   ))}
  </FormControl>
</FormGroup>

</Col>

<Col lg={6} md={6} sm={12} xs={12}>

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
<Col lg={6} md={6} sm={12} xs={12}>
    <Button bsStyle="success" onClick={this.submitForm.bind(this)}>Sign up</Button>
</Col>
</Row>
  </form>
  </section>
);

    return (formInstance);
  }
}
