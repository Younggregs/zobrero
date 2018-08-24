import React from 'react'
import { Row , Col, Media, Image } from 'react-bootstrap'
import Heading from './blocks/houses/Heading.js'

export default class WhatsNew extends React.Component {

  state = {
   whats_new: [],
   media: null
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


    setMedia(dp){
      this.state.media = 'http://198.187.30.71:8000' + dp
    }



       render() {
         return (
           <section className="whats-new">

              <Row>
                <Heading title={this.props.title}/>
              </Row>

              {this.emptyResult() ? (
                <span>No news yet</span>
              ) : (

              <span>
              {this.state.whats_new.map(item => (
                <Row>
                {this.setMedia(item.content_image)}
                  <Col lg={6} offset={3} md={6} mdOffset={3} sm={12} xs={12}>

                    <Media>
                    <Media.Heading>{item.title}</Media.Heading>
                    <Image src = { `${this.state.media}` } alt={item.title} responsive/>
                    <Media.Body>{item.body}</Media.Body>
                    </Media><hr />

                  </Col>
                </Row>
              ))}
              </span>
              )}

              <br /><br /><br /><br />

           </section>
         )
       }
  }
