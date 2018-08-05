import React from 'react'
import { Col, Form, Button,FormGroup, FormControl, ControlLabel, HelpBlock } from 'react-bootstrap'

export default class EditProfileForm extends React.Component {

  state = {
      categorylist: [],
      talentlist_1: [],
      talentlist_2: [],
      category_id: 0
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
        this.state.category_id = cat_id
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
  <section className="edit-profile-form">

  <form  method="post" action="#">
  <ControlLabel>Change Password</ControlLabel>
  <FieldGroup id="formControlsPassword" label="Old Password" type="password" name="old_password"/>
   <Col lg={6} md={6} sm={6} xs={12}>
  <FieldGroup id="formControlsPassword" label="New Password" type="password" name="new_password"/>
   </Col>

   <Col lg={6} md={6} sm={6} xs={12}>
    <FieldGroup id="formControlsPassword" label="Confirm Password" type="password" name="confirm_password"/>
    </Col>

    <Button type="submit">change password</Button>
  </form>
<br />
<form  method="post" action="#">
<ControlLabel>Update Profile Information</ControlLabel>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>What Do You Do</ControlLabel>
               <FormControl id="category_1" componentClass="select" placeholder="select" onChange={this.getCategoryIdOne.bind(this)}>
               <option value="0">Select category</option>
               {this.state.categorylist.map(item => (

                 <option value={item.id}>{item.category}</option>

              ))}
               </FormControl>

             <FormControl componentClass="select" placeholder="select">
               <option value="0">Select specialty</option>
               {this.state.talentlist_1.map(item => (

                 <option value={item.id}>{item.talent}</option>

              ))}
             </FormControl>
           </FormGroup>




    <FormGroup controlId="formControlsSelect">
    <ControlLabel>What Can You Do</ControlLabel>
    <FormControl id="category_2" componentClass="select" placeholder="select" onChange={this.getCategoryIdTwo.bind(this)}>
    <option value="0">Select category</option>
    {this.state.categorylist.map(item => (

      <option value={item.id}>{item.category}</option>

   ))}
    </FormControl>

  <FormControl componentClass="select" placeholder="select" multiple>
    <option value="0">Select specialty</option>
    {this.state.talentlist_2.map(item => (

      <option value={item.id}>{item.talent}</option>

   ))}
  </FormControl>
</FormGroup>


    <Button type="submit">Update Profile</Button>
  </form>
  </section>
);

    return (formInstance);
  }
}
