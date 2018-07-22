import React from 'react'
import { Redirect } from 'react-router-dom'
import { Row, Col, Button, FormGroup, ControlLabel, HelpBlock, FormControl } from 'react-bootstrap'

export default class AppointmentForm extends React.Component {

    state = {
        statement : [],
        categoryList : [],
        talentList: [],
        clientName: null
    }


async componentDidMount() {
        try {
          const res = await fetch('http://198.187.30.71:8000/talent_category/');
          const categoryList = await res.json();
          this.setState({
            categoryList
          });
        } catch (e) {
          console.log(e);
        }


        try {
            const res = await fetch('http://198.187.30.71:8000/getaccount_name/' + this.props.client_id + '/');
            const clientName = await res.json();
            this.setState({
              clientName
            });
          } catch (e) {
            console.log(e);
          }
}



async getTalents(){

    try {
      const res = await fetch('http://198.187.30.71:8000/all_talents/' + this.state.category_id);
      const talentList = await res.json();
      this.setState({
        talentList
      });
    } catch (e) {
      console.log(e);
    }
  }


    setCategoryId(cat_id){
        this.state.category_id = cat_id;
        this.getTalents();
    }

    getCategoryId(){
      var e = document.getElementById("category");
      var cat_id = e.options[e.selectedIndex].value;

      this.setCategoryId(cat_id);

    }



    async submitForm(){    

        var task = document.getElementById("task").value
        var description = document.getElementById("description").value
        var month = document.getElementById("month").value
        var day = document.getElementById("day").value
        var time = document.getElementById("time").value
        var oclock = document.getElementById("oclock").value
    
        
    
        var formData = new FormData()
        formData.append('task', task)
        formData.append('description', description)
        formData.append('month', month)
        formData.append('day', day)
        formData.append('tiem', time)
        formData.append('oclock', oclock)

        const auth = localStorage.getItem('auth_code')
    
    
        try {
          const res = await fetch('http://127.0.0.1:8000/appointment/' + this.props.client_id + '/', {
          
           body :formData,
           method: 'POST',
           headers : {
            'Authorization' : 'Token ' + auth,
          },
          
        
          });
          const statement = await res.json();
          this.setState({
            statement
          });
    
        } catch (e) {
          console.log(e);
        }
    
      }

      


      render() {

        function FieldGroup({ id, label, help, ...props }) {
            return (
              <FormGroup controlId={id}>
                <ControlLabel>{label}</ControlLabel>
                <FormControl {...props} />
                {help && <HelpBlock>{help}</HelpBlock>}
              </FormGroup>
          );
        }


        return (
           <div className="appointment-form">

           <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
           <p className="success-msg">Create Appointment with <i>{this.state.clientName}</i></p>

           <form>
<Row>
<Col lg={6} md={6} sm={12} xs={12}>
    <FormGroup>
      <ControlLabel>Appointment task</ControlLabel>
               <FormControl 
               id="category" 
               componentClass="select" 
               placeholder="select" 
               onChange={this.getCategoryId.bind(this)}>
        <option value="0">Select task category</option>
        {this.state.categoryList.map(item => (

        <option value={item.id}>{item.category}</option>

              ))}
      </FormControl>
  

             <FormControl componentClass="select" placeholder="select" name="task" id="task">
               <option value="0">Select task</option>
               {this.state.talentList.map(item => (

                 <option value={item.id}>{item.talent}</option>

              ))}
             </FormControl>
           </FormGroup>

</Col>

   


<Col lg={6} md={6} sm={12} xs={12}>
<p><b>Task description</b></p>
    <textarea 
        id="description"
        name="description"
        placeholder="Task description">
    </textarea>
</Col>
</Row>

<Row>
  <Col lg={4} lgOffset={3} md={4} mdOffset={3} sm={8} smOffset={2} xs={8} xsOffset={2}>
  <FormGroup>
    <ControlLabel>Date</ControlLabel>
    <Row>
      <Col lg={6} md={6} sm={6} xs={6}>
      <FieldGroup 
    id="month" 
    label="M" 
    type="text" 
    name="month"
   
    />
       </Col>

    <Col lg={6} md={6} sm={6} xs={6}>
    <FieldGroup 
    id="day" 
    label="D" 
    type="text" 
    name="day"
    />
    </Col>

   </Row>
  </FormGroup>
  </Col>
</Row>




<Row>
<Col lg={4} lgOffset={3} md={4} mdOffset={3} sm={8} smOffset={2} xs={8} xsOffset={2}>
  <FormGroup>
    <ControlLabel>Time</ControlLabel>
    <Row>
      <Col lg={6} md={6} sm={6} xs={6}>
      <FieldGroup 
    id="time" 
    label="o'clock" 
    type="text" 
    name="time"
    placeholder="10:00"
   
    />
       </Col>


    <Col lg={6} md={6} sm={6} xs={6}>
    <FieldGroup 
    componentClass="select" 
    placeholder="select" 
    name="oclock" 
    label="am/pm"
    id="oclock">
        <option value="am">am</option>
        <option value="pm">pm</option>    
    </FieldGroup>
    </Col>

   </Row>
  </FormGroup>
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
       <span><Redirect to='/notification'/></span>
    ) : (
      <span></span>
    )}

  </Col>  
</Row>

  <Row>
  <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
    <Button bsStyle="success" onClick={this.submitForm.bind(this)}>Submit Form</Button>
  </Col>
  </Row>

  </form>

           </Col>
          
           </div>
         )
     }
}
