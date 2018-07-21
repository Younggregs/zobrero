import React from 'react'
import { Image } from 'react-bootstrap'

export default class ProfileImage extends React.Component {
       render() {
         return (
           <section className="profile-image">
              <div className="image">
               <Image src= { `${this.props.media}` }  alt="thumbnail" responsive/>
              </div>
           </section>
         )
       }
  }
