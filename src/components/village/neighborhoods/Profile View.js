import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import ProfileImage from './blocks/houses/Profile Image'
import ProfileInfo from './blocks/houses/Profile Info'
import ProfileOptions from './blocks/houses/Profile Options'

export default class ProfileView extends React.Component {


  state = {
    profileDetail: [],
    myaccount: null,
    media : null
  }
 
   async componentWillMount() {
     try {
       const res = await fetch('http://198.187.30.71:8000/accounts/' + this.props.profile_id);
       const profileDetail = await res.json();
       this.setState({
         profileDetail
       });
     } catch (e) {
       console.log(e);
     }

   }

   setMedia(){
    this.state.media = 'http://198.187.30.71:8000' + this.state.profileDetail.profile_pic
  }

       render() {

         return (
           <section className="profile-view">

           <Grid>
            <Row>
             <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
              {this.setMedia()}
              <ProfileImage media={this.state.media}/>
             </Col>
            </Row>

          
            <Row>
             <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
             <div className="profile-details">
             <ProfileInfo 
               firstname ={this.state.profileDetail.firstname}
               lastname = {this.state.profileDetail.lastname} /></div>
             </Col>
            </Row>

            <Row>
             <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
             <div className="profile-details">
             <ProfileOptions 
              profile_id = {this.props.profile_id}
              is_myprofile={this.props.is_myprofile}/></div>
             </Col><br /><br />
            </Row>

           </Grid>

           </section>
         )
       }
  }
