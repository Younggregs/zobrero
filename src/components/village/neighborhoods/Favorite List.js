import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Col, Media, Glyphicon } from 'react-bootstrap';
import BuzzMe from './blocks/houses/Buzz Me.js';
import ProfileInfo from './blocks/houses/Profile Info.js';
import CallerImage from './blocks/houses/Caller Image.js';

export default class FavoriteList extends React.Component {
       render() {
         return (
           <section className="favorite-list">
               <br /><br /><br />
               <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
               <Media>
                <Media.Left>
                <Link to="/profile">
                <CallerImage/>
                </Link>
                </Media.Left>
                <Media.Body>
                <Media.Heading><BuzzMe/></Media.Heading>
                <Link to="/profile">
                <ProfileInfo/>
                </Link>
                <p>Favorite Me
                <span className="glyphs"><Glyphicon glyph="star-empty"/></span>
                </p>
                </Media.Body>
                </Media><hr />
               </Col>


               <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
               <Media>
                <Media.Left>
                <Link to="/profile">
                <CallerImage/>
                </Link>
                </Media.Left>
                <Media.Body>
                <Media.Heading><BuzzMe/></Media.Heading>
                <Link to="/profile">
                <ProfileInfo/>
                </Link>
                <p>Favorite Me
                <span className="glyphs"><Glyphicon glyph="star-empty"/></span>
                </p>
                </Media.Body>
                </Media><hr />
               </Col>
           </section>
         )
       }
  }
