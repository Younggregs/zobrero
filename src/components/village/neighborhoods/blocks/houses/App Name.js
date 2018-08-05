import React from 'react'
import { Link } from 'react-router-dom'

export default class AppName extends React.Component {
       render() {
         return (
           <div className="app-name" id="app-name">
            
             { this.props.logged_in ? (
               <Link to="/home">
                  <span>zobrero</span>
               </Link>
             ) : (
              <Link to="/">
                  <span>zobrero</span>
              </Link>
             )}
             

           </div>
         )
       }
  }
