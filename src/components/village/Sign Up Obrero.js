import React from 'react'
import { Grid , Row, Col } from 'react-bootstrap'
import SignupObreroForm from './neighborhoods/blocks/houses/Signup Obrero Form.js';


export default class SignUp extends React.Component {
      render() {
        return (
          <Grid>
           <Row>
           <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
           <div className="sign-up">
            <SignupObreroForm/>
           </div>
           </Col>
           </Row>
          </Grid>
         )
     }
}
