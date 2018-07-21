import React from 'react';
import ReactDOM from 'react-dom';
import { Carousel } from 'react-bootstrap';

export default class FadeShow extends React.Component {
       render() {
         return (
           <section className="fade-show">
               <Carousel>
                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={ require ('./images/barber.jpg') } />
                    <Carousel.Caption>
                      <h3>Iam Wright Carter</h3>
                      <p>I can make your haircuts</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={ require ('./images/hometutor.jpeg') } />
                    <Carousel.Caption>
                      <h3>Iam James Madiba</h3>
                      <p>I can teach your kids</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={ require ('./images/web design.jpg') } />
                    <Carousel.Caption>
                      <h3>Iam Isabella Augusto</h3>
                      <p>I can make you websites</p>
                    </Carousel.Caption>
                  </Carousel.Item>

                  <Carousel.Item>
                    <img width={900} height={500} alt="900x500" src={ require ('./images/hairbraider.jpg') } />
                    <Carousel.Caption>
                      <h3>Iam Mildred Johnson</h3>
                      <p>I can make your hair braids</p>
                    </Carousel.Caption>
                  </Carousel.Item>
              </Carousel>
           </section>
         )
       }
  }
