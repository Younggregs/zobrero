import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Navbar,FormGroup, FormControl, Button, Glyphicon, Grid, Row, Col, Nav, NavItem } from 'react-bootstrap';
import ProfileInfo from './blocks/houses/Profile Info.js';
import BuzzMe from './blocks/houses/Buzz Me.js';
import DistanceFromYou from './blocks/houses/Distance From You.js';
import ProfileImage from './blocks/houses/Profile Image.js';
import ProfileOptions from './blocks/houses/Profile Options.js';
import RecentActivity from './Recent Activity.js';
import TopRated from './Top Rated.js';
import WhatsNew from './Whats New.js';
import SearchView from './Search View.js';


export default class HomeManager extends React.Component {

  state = {
      search_result: [],
      search_phrase:"",
      is_search: false,
    };

    async searchResult() {
      try {
        const res = await fetch('http://198.187.30.71:8000/search', {
            method: 'POST',
            headers : new Headers(),
            body:JSON.stringify({search_phrase:this.state.search_phrase})
          })

        const search_result = await res.json();
        this.setState({
          search_result
        });

      } catch (e) {
        console.log(e);
      }
    }


    setSearchPhrase(search_phrase){
        this.state.search_phrase = search_phrase;
        this.searchResult();

        this.state.is_search = true;
    }

    getSearchPhrase(){
      var search_phrase = document.getElementById("search_phrase").value;
      this.setSearchPhrase(search_phrase);

    }

       render() {

         return (
          <section>
           {this.state.is_search ? (

             <div className="search-view">


     <Grid>
     {this.state.search_result.map(item => (
      <div>
      <Row>
       <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
        <ProfileInfo firstname={item.firstname} lastname={item.lastname} talent={item.talent}/>
        <BuzzMe/>
        <hr />
       </Col>
      </Row>

      <Row>
       <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
        <DistanceFromYou/>
       </Col>
      </Row>

      <Row>
       <Col lg={6} lgOffset={3} md={6} mdOffset={3} sm={12} xs={12}>
        <ProfileImage/>
        <hr />
       </Col>
      </Row>

      <Row>
       <Col lg={6} lgOffset={4} md={6} mdOffset={4} sm={12} xs={12}>
        <ProfileOptions/>
       </Col>
      </Row>
      </div>

    ))}

    </Grid>
   </div>
           ) : (

             <section className="home">
             <RecentActivity title="Recent Activity"/>
             <TopRated title="Top Rated"/>
             <WhatsNew title="Whats New"/>
             </section>

           )}


        </section>
         )
       }
  }
