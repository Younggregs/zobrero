import React from 'react'
import { Link } from 'react-router-dom'


export default class MenuNavigation extends React.Component {


       render() {
         return (
           <section className="menu-navigation">
             <p><Link to="/">Zobrero</Link></p>
           </section>
         )
       }
  }
