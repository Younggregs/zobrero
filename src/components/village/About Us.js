import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'
import MenuNavigation from './neighborhoods/Menu Navigation'

export default class AboutUs extends React.Component {


       render() {
         return (
           <section className="about-us">
            <MenuNavigation/>
            <Row className="menu">

            <Col lg={2} lgOffset={2} md={2} mdOffset={2} sm={12} xs={12}>
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
             <p className="menu-header">About Us</p>

              <div className="menu-body">
            <p><b>Zobrero</b></p>
            <p>Zobrero is an  online freelance marketplace where people offer
                services to each other locally. Services range from house chores,
                furniture repairs, hairdressing/barbing to automobile repairs,
                digital services...
            </p>
              </div>
             </div>
            </Col>
          </Row>
           </section>
         )
       }
  }
