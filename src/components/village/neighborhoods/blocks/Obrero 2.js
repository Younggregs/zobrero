import React from 'react'
import { Col,Row, Thumbnail, Glyphicon } from 'react-bootstrap'
import ProfileInfo from './houses/Profile Info.js'

export default class Obrero2 extends React.Component {

  state = {
      workerlist: [],
    };

    async componentDidMount() {
      try {
        const res = await fetch('http://198.187.30.71:8000/top_rated/');
        const workerlist = await res.json();
        this.setState({
          workerlist
        });
      } catch (e) {
        console.log(e);
      }
    }


    emptyResult(){

        var empty_set = false
      
        if(this.state.eshop_list.length <= 0 ){
          empty_set = true
        }
      
        return empty_set
        
      
      }
    
    
    


       render() {
         return (
        <section>

  {this.emptyResult ? (
         <Col lgOffset={2} mdOffset={2} smOffset={2} xsOffset={2}>
          <span>No Top rated yet</span>
         </Col>

        ) : (
          <span>
          <Row>
          <Col lg={12} md={12} smHidden={12} xsHidden={12}>
  
          
            <Row>
                 {this.state.workerlist.map(item => (
              <Col lg={3} md={3}>
  
               <Thumbnail href="/profile" src={ require ('./houses/images/client_1.jpg') } alt="thumbnail">
                
                 <ProfileInfo firstname={item.firstname} lastname={item.lastname} talent={item.talent}/>
                 <p>Favorite Me
                 <span className="glyphs"><Glyphicon glyph="star-empty"/></span>
                 </p>
               </Thumbnail>
  
                </Col>
              ))}
           
            </Row>
            </Col>
            
            <Col lgHidden mdHidden sm={12} xs={12}>
            <div class="scrolling-wrapper">
  
                 {this.state.workerlist.map(item => (
                <div class="card">
  
               <Thumbnail href="#" src={ require ('./houses/images/client_1.jpg') } alt="thumbnail">
                
                 <ProfileInfo firstname={item.firstname} lastname={item.lastname} talent={item.talent}/>
                 <p>Favorite Me
                 <span className="glyphs"><Glyphicon glyph="star-empty"/></span>
                 </p>
               </Thumbnail><br />
  
                </div>
              ))}
  
  
              </div>
            </Col>
  
          </Row>
          </span>

        )}

        </section>
         )
       }
  }
