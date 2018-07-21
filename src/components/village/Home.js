import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import HomeNavigation from './neighborhoods/Home Navigation'
import RecentActivity from './neighborhoods/Recent Activity'
import TopRated from './neighborhoods/Top Rated'
import WhatsNew from './neighborhoods/Whats New'
import SideMenu from './neighborhoods/blocks/houses/Side Menu'

export default class Home extends React.Component {

      render() {
        return (
           <div className="home">
             <HomeNavigation/>
            <Grid>
             <Row>
               <Col lg={9} md={9} smHidden xsHidden>
                 <RecentActivity title="Recent Activity"/>
                 <TopRated title="Top Rated"/>
                 <WhatsNew title="Whats New"/>
               </Col>

               <Col lg={3} md={3} smHidden xsHidden>
                  <SideMenu/>
               </Col>

               <Col lgHidden mdHidden>
                <RecentActivity title="Recent Activity"/>
                <TopRated title="Top Rated"/>
                <WhatsNew title="Whats New"/>
               </Col>
             </Row>
           </Grid>

        
           </div>
         )
     }
}
