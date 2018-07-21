import React from 'react'
import { Link } from 'react-router-dom'

export default class SideMenu extends React.Component {
       render() {
         return (
            <div className="side-menu">
              <ul>
                  <li>
                    <p>
                        <Link to='/about_us'>About Us
                        </Link>
                    </p>
                  </li>

                  <hr />

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

                <hr />

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

                <hr />


                 <li>
                    <p>
                        <Link to='/logout'>Logout
                        </Link>
                    </p>
                  </li>




                </ul>
             </div>
         )
       }
  }
