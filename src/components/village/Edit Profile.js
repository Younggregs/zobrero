import React from 'react'
import { Grid , Row, Col } from 'react-bootstrap'
import HomeNavigation from './neighborhoods/Home Navigation'
import EditProfileView from './neighborhoods/Edit Profile View'
import Footer from './neighborhoods/Footer'

export default class EditProfile extends React.Component {
      render() {
        return (
           <div className="edit-profile">
             <HomeNavigation/><br />
             <Grid>
           <br /><Row>
              <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
             <EditProfileView profile_id= {this.props.match.params.profile_id}/>
              </Col>
              </Row>
              <Row>
                <Footer/>
              </Row>
              </Grid>
           </div>
         )
     }
}
