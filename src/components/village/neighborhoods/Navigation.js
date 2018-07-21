import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import { Navbar,FormGroup, FormControl,InputGroup, Glyphicon, Button, Grid, Row, Col, Form, Media } from 'react-bootstrap';
import ProfileInfo from './blocks/houses/Profile Info'
import AppName from './blocks/houses/App Name'
import BuzzMe from './blocks/houses/Buzz Me'
import DistanceFromYou from './blocks/houses/Distance From You'
import ProfileImage from './blocks/houses/Profile Image'
import ProfileOptions from './blocks/houses/Profile Options'


export default class Navigation extends React.Component {

  state = {
      search_result: [],
      search_phrase:"",
      is_search: false,
    };

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

    getSearchPhrase2(){
      var search_phrase = 2
      this.setSearchPhrase(search_phrase);

    }


       render() {

         return (
           <section>
             <Row>
               <Col lg={12} md={12} smHidden xsHidden>
               <section className="navigation" id="navigation">
               <Row>
                 <Col lg={2} md={2}>
                 <AppName/>
                  </Col>
                <Col lg={6} md={6} smHidden xsHidden>
                <Form inline>
                  <FormGroup>
                    <FormControl
                     type="text" 
                     placeholder="Lets help you" 
                     name="search_phrase" 
                     id="search_phrase"
                     size="50"/>
     
                  <Button onClick={this.getSearchPhrase.bind(this)}>Help</Button>
                  </FormGroup>
                </Form>
                </Col>
               

          
                <Col lg={4} md={4} smHidden xsHidden>
                 <Link to="/help">
                 <Button>
                  Help
                 </Button>
                 </Link>
               
                 <Link to="/signin">
                  <Button>Sign In</Button>
                 </Link>
               
                 <Link to="/signup">
                  <Button>Sign Up</Button>
                 </Link>
                </Col>

                </Row>
                </section>
                </Col>
               </Row>
              


              {this.state.is_search ? (

                       <div className="search-view">


               <Grid>
               <div id="outer_wrapper">
               <br />
                <div id="inner_wrapper">

               {this.state.search_result.map(item => (
                <div className="box">
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
                </div>

              ))}

              </div></div>
              </Grid>
             </div>
                     ) : (

                       <section className="home">
                       </section>

                     )}

                    
                


                <Col lgHidden mdHidden sm={12} xs={12}>
                      <Navbar fixedTop>
                       <Row>
                       <Col sm={3} xs={3}>
                         <div className="app-landingsearch">zobrero</div>
                      </Col>

                      <Col sm={3} xs={3}>
                       <Link to="/signin">
                          <Button bsSize="sm">Sign In</Button>
                       </Link>
                      </Col>

                      <Col sm={3} xs={3}>
                       <Link to="/signup">
                          <Button bsSize="sm">Sign Up</Button>
                       </Link>
                      </Col>

                      <Col sm={3} xs={3}>
                       <Link to="/help">
                          <Button bsSize="sm">Help</Button>
                       </Link>
                      </Col>

                        </Row>
                      
      <Form inline>
             <FormGroup>
              <InputGroup>
                <FormControl 
                  id="search_phrase_sm"
                  type="text" 
                  name="search_phrase_sm"
                  placeholder="Find help...  "
                  inputRef={(ref) => { this.inputSearchPhrase = ref; }}
                />

      
            <InputGroup.Button>
               <Button onClick={this.getSearchPhrase2.bind(this)}><Glyphicon glyph="search"/></Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Form>

             </Navbar>
                  </Col>

        </section>
         )
       }
  }
