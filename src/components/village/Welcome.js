import React from 'react'
import LandingShow from './Landing Show'
import LandingPage from './Landing Page'
import Home from './Home'


export default class Welcome extends React.Component {

    state = {
        response: true,
        show_welcome: null,
        welcome: 'Zobrero'
    }
  

  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')
    console.log(auth)
  
    try {
      const res = await fetch('http://198.187.30.71:8000/isloggedin/', {
      
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      .then(response => {
        if (response.status === 200) {
          
        } else {
          this.setState({ response: false})
        }
      })
      
      console.log(this.state.response)
    } catch (e) {
      console.log(e);
    }

      this.setState({ show_welcome: true})
  }




  

  async componentWillMount(){
    setTimeout( () => {
      this.setState({show_welcome: false});
     }, 3000)
  }



  render(){
      return (
        <div>
          {this.state.show_welcome ? (
            <LandingShow welcome_message = {this.state.welcome}/>
          ) : (
            <div>
                { this.state.response ? (
            <Home/>
          ): (
            <LandingPage/>
          )}
            </div>

          )}

        </div>
      )
  }

}
