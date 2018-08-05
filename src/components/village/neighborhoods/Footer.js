import React from 'react'
import { Row} from 'react-bootstrap'
import About from './blocks/houses/About.js'
import Copyright from './blocks/houses/Copyright.js'
import GotoTop from './blocks/houses/Goto Top.js'

export default class Footer extends React.Component {
      render() {
        return (
           <div className="footer">
            <GotoTop/>
           
             <Row>
              <About/>
             </Row>
           
            <Row>
            <Copyright/>
            </Row>
           </div>
         )
     }
}
