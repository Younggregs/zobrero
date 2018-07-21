import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar,FormGroup, FormControl, Button, Glyphicon, Grid, Row, Col, Nav, NavItem,Media } from 'react-bootstrap';
import ProfileInfo from './blocks/houses/Profile Info.js'
import AppName from './blocks/houses/App Name'
import BuzzMe from './blocks/houses/Buzz Me'
import DistanceFromYou from './blocks/houses/Distance From You'
import ProfileImage from './blocks/houses/Profile Image'


export default class HomeNavigation extends React.Component {

  state = {
      search_result: [],
      search_phrase:"",
      is_search: false,
      profile_id : null
    };


    async componentWillMount() {
  
      const auth = localStorage.getItem('auth_code')
  
  
        try {
          const res = await fetch('http://198.187.30.71:8000/myaccount_id/', {
      
            headers : {
              'Authorization' : 'Token ' + auth,
              
            },
          
          });
          const profile_id = await res.json();
          this.setState({
            profile_id
          });
        } catch (e) {
          console.log(e);
        }
  
      }

    async searchResult() {
      var formData = new FormData()
      formData.append("search_phrase", this.state.search_phrase)

      try {
        const res = await fetch('http://198.187.30.71:8000/search/',{

        form :formData,
        method: 'POST'

        });
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
        this.state.is_search = true;
        this.searchResult();

    }

    getSearchPhrase(){
      var search_phrase = document.getElementById("search_phrase").value;
      this.setSearchPhrase(search_phrase);

    }

       render() {

         return (
           <section>
              <Row>
                <Col lg={12} md={12} smHidden xsHidden>
                  <Row>
                     
                  <Navbar fixedTop>
                   <Col lg={1} md={1}>
                     
                      <AppName logged_in={true}/>
                    </Col>

                    <Col lg={6} md={6}>
                             
                           <Nav left eventKey={0}>
                            <form className="navbar-form">
                              <FormGroup>
                                <FormControl 
                                type="text" 
                                placeholder="Lets help you" 
                                name="search_phrase" 
                                id="search_phrase" 
                                size="50"/>
                              </FormGroup>{' '}
                              <Button onClick={ this.getSearchPhrase.bind(this) }>Help</Button>
                            </form>
                          </Nav>
                      </Col>

                        <Col lgOffset={1} mdOffset={1}>

                          <Link to={`/profile/${ this.state.profile_id } `}>
                            <span className="glyphs">
                               <Glyphicon glyph="user"/>
                             </span>
                          </Link>&nbsp;&nbsp;&nbsp;
                         
                          <Link to="/chats">
                            <span className="glyphs">
                               <Glyphicon glyph="envelope"/>
                             </span>
                          </Link>&nbsp;&nbsp;&nbsp;
                         
                          <Link to="/notification">
                            <span className="glyphs">
                               <Glyphicon glyph="bell"/>
                             </span>
                          </Link>
                          </Col>

                       </Navbar>

                      </Row>
                    </Col>
                   </Row>

                   <Row>
                     {this.props.search_view ? (
                        <span></span>
                     ) : (
                      <Col lgHidden mdHidden sm={12} xs={12}>
                      <Navbar fixedTop>
                         <div className="appname-sm">zobrero</div>
                      </Navbar>
                      </Col>
                     )}
                    
                   </Row>

                       <section className="bottomNav">

                           
                           <Row>
                           <Col lgHidden mdHidden sm={12} xs={12}>
                           <Navbar fixedBottom>
                             <Col lgHidden mdHidden sm={2} xs={2}>
                            
                              <Link to="/chats">
                               <span className="glyphs-profile">
                               <Glyphicon glyph="envelope"/>
                             </span>
                             </Link>

                             </Col>


                             <Col lgHidden mdHidden sm={2} xs={2}>
                            
                            <Link to="/notification">
                             <span className="glyphs-search">
                             <Glyphicon glyph="bell"/>
                           </span>
                           </Link>

                           </Col>


                             <Col lgHidden mdHidden sm={2} xs={2} smOffset={1} xsOffset={1}>
                
                             <Link to="/home">
                              <span className="glyphs-home">
                               <Glyphicon glyph="home"/>
                             </span>
                             </Link> 
                           
                             </Col>

                             <Col lgHidden mdHidden sm={2} xs={2} smOffset={1} xsOffset={1}>

                               <Link to="/search">
                               <span className="glyphs-search">
                                 <Glyphicon glyph="search"/>
                               </span>
                               </Link>

                             
                               </Col>

                              <Col lgHidden mdHidden sm={2} xs={2}>

                               <Link to={`/profile/${ this.state.profile_id } `}>
                               <span className="glyphs-profile">
                                 <Glyphicon glyph="user"/>
                               </span>
                               </Link>

                             
                               </Col>
                           
                             </Navbar>
                           </Col>
                            </Row>
                

                            
                        </section>

           {this.state.is_search ? (

             <div className="search-view">

     <Grid>

     

     {this.state.search_result.map(item => (
      <Col lg={3} md={3} sm={12} xs={12}>
      <Media>
      <Link to="/profile">
      <ProfileInfo firstname={item.firstname} lastname={item.lastname} talent={item.talent}/>
      </Link>
       <Media.Body>
       <Media.Heading><DistanceFromYou/><BuzzMe/></Media.Heading>
       <Link to="/profile">
        <ProfileImage/>
       </Link>
       <BuzzMe/>
       </Media.Body>
       </Media>

      </Col>


    ))}
   
    </Grid>

   </div>
           ) : (

             <section>
             </section>

           )}


        </section>
         )
       }
  }
