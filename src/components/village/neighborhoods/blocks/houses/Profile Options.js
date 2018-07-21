import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Glyphicon } from 'react-bootstrap';

export default class ProfileOptions extends React.Component {
       render() {
         return (
           <section className="profile-options">

           {this.props.is_myprofile ? (
            <Link to={`/editprofile/${ this.props.profile_id } `}>
              <p>Edit Profile</p>
            </Link>
           ) : (
            
              <p>Favorite Me</p>
         
           )}

              

              <Link to="/reviews">
                <p>Reviews</p>
              </Link>

              <Link to="/resume">
                <p>Resume</p>
              </Link>

              <Link to="/favorite_workers">
                <p>Favorite Workers<Glyphicon glyph="heart" className="favorite-glyph"/></p>
              </Link><br /><br />

           </section>
         )
       }
  }
