import React from 'react'
import { Grid , Row } from 'react-bootstrap'
import HomeNavigation from './neighborhoods/Home Navigation'
import Heading from './neighborhoods/blocks/houses/Heading'
import CallHistory from './neighborhoods/Call History'
import CrossRoads from './neighborhoods/blocks/houses/Cross Roads'

export default class Calls extends React.Component {
      render() {
        return (
           <div className="calls">
           <HomeNavigation/>
             <Grid>
              <Row>
                <CrossRoads calls={true}/>
              </Row>
              <Row>
                <Heading title="Call History"/>
              </Row>
              <Row>
                <CallHistory/>
              </Row>
              <br /><br /><br />
            </Grid>
           </div>
         )
     }
}
