import React from 'react'
import { Grid , Row } from 'react-bootstrap'
import HomeNavigation from './neighborhoods/Home Navigation'
import Heading from './neighborhoods/blocks/houses/Heading'
import AppointmentForm from './neighborhoods/blocks/houses/Appointment Form'

export default class Appointment extends React.Component {
      render() {
        return (
           <div className="appointment">
           <HomeNavigation/>
             <Grid>
              <Heading title="Create appointment"/>
              <Row>
               <AppointmentForm client_id={this.props.match.params.client_id}/>
              </Row>
              <br /><br /><br />
            </Grid>
           </div>
         )
     }
}
