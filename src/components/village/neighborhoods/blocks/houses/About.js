import React from 'react';
import { Link } from 'react-router-dom'
import { Col } from 'react-bootstrap';

export default class About extends React.Component {
       render() {
         return (
           <section className="about">
             <Col lg={6} md={6} sm={5} smOffset={1} xs={5} xsOffset={1}>
             <ul>
                  <li>
                    <p>
                        <Link to='/about_us'>About Us
                        </Link>
                    </p>
                  </li>


                  <li>
                    <p>
                        <Link to='/faq'>FAQ
                        </Link>
                    </p>
                  </li>
                  
                  <li>
                    <p>
                        <Link to='/howto'>How To
                        </Link>
                    </p>
                  </li>
            </ul>
            </Col>

            <Col lg={6} md={6} sm={5} smOffset={1} xs={5} xsOffset={1}>
            <ul>

                  <li>
                    <p>
                        <Link to='/Feedback'>Feedback
                        </Link>
                    </p>
                  </li>

                  <li>
                    <p>
                        <Link to='/report'>Reports and Complaints
                        </Link>
                    </p>
                  </li>


                 <li>
                    <p>
                        <Link to='/logout'>Logout
                        </Link>
                    </p>
                  </li>
            </ul>
            </Col>

           </section>
         )
       }
  }
