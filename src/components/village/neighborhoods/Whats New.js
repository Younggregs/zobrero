import React from 'react'
import { Row } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'
import Thread from './blocks/Thread.js'

export default class WhatsNew extends React.Component {

  state = {
   whats_new: [],
  };

  async componentDidMount() {
    try {
      const res = await fetch('http://198.187.30.71:8000/whats_new/');
      const whats_new = await res.json();
      this.setState({
        whats_new
      });
    } catch (e) {
      console.log(e);
    }
  }


  emptyResult(){

      var empty_set = false
    
      if(this.state.whats_new.length <= 0 ){
        empty_set = true
      }
    
      return empty_set
      
    
    }


       render() {
         return (
           <section className="whats-new">
            
              <Row>
                <Heading title={this.props.title}/>
              </Row>

              {this.emptyResult ? (
                <span>No news yet</span>
              ) : (
                <Row>
                <Thread thread="Whats new thread goes here"/>
              </Row>
              )}
             
              <br /><br /><br /><br />
             
           </section>
         )
       }
  }
