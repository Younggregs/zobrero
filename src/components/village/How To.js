import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import MenuNavigation from './neighborhoods/Menu Navigation'

export default class HowTo extends React.Component {


       render() {
         return (
           <section className="how-to">
            <MenuNavigation/>
            <Row className="menu">

            <Col lg={2} lgOffset={2} md={2} mdOffset={2} smHidden xsHidden>
            <div className="menu-nav">

           <p><Link to="/howto">How To
           </Link></p>

           <p><Link to="/faq">FAQ
           </Link></p>

            <p><Link to="/feedback">Feedback
           </Link></p>

           <p><Link to="/about_us">About Us
           </Link></p>

            <p><Link to="/contact_us">Contact Us
           </Link></p>
            </div>
            </Col>


            <Col lg={6} md={6} sm={12} xs={12}>
             <div className="menu-text">
             <p className="menu-header">How To</p>

              <div className="menu-body">



           <div className="question">
            <p>#1. <i>How to</i> Get help</p>
            </div>

            <div className="answer">
            <p>To get help, signin/signup and search for any service you need. If available, the list of available employees  near to your location would be displayed.
	            <br />There are three options of contacting an employee:</p>
                <p>1. By sending an appointment request.</p>
                <p>2. By chatting up the employee.</p>
                <p>3. By calling the employee on phone.</p>

                <p><b><u>By sending an appointment request </u></b>: To create appointment request, click on the ‘create appointment’ link on the employee profile (on the search result list). This would take you to the ‘appointment creation page’.
                Now this is where you specify the work(task) details and submit the request. The employee would be notified of the request, and he/she have options to accept or cancel your appointment request.
                When the employee accepts or cancels the request you would be notified too, and the progress of the appointment would be followed through.</p>
                <p><b><u>By chatting up the employee </u></b>:You as the employer can also chat with the employee to clarify the task to be carried out and the cost, and any other detail you would need to reconcile.</p>
                <p><b><u>By calling the employee on phone </u></b>:As the employer you can also call the employee if he/she provides his/her phone contact for emergencies and desperate situations, that would require immediate service.</p>

            </div>



            <div className="question">
            <p>#2. <i>How to</i> be an obrero(employee):</p>
            </div>

            <div className="answer">
            <p>To be an ‘obrero’, you would need to register as obrero on the signup page, you would use the ‘signup as worker’ form.</p>
            <p>When signing up, you would need to specify one main task you are best at, in the ‘ What do you do’ dropdown list, you first choose the category and then the talent(task).</p>
	            <p>Then you would need to specify other task you can also carry out, in the ‘ What can you do’  dropdown, where you also first choose the category and then the talent(task). Here you can select multiple talents, maximum of three.</p>
	            <p>After filling the form, submit. If everything goes successful, you would be added as an employee(an obrero) and redirected to you home page. Done!</p>
            </div>


              </div>
             </div>
            </Col>
          </Row>
           </section>
         )
       }
  }
