import React from 'react'
import LandingPage from './Landing Page'
import Home from './Home'


export default class Welcome extends React.Component {

    state = {
        response: false,
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
          this.setState({ response: true})
        }
      })

      console.log(this.state.response)
    } catch (e) {
      console.log(e);
    }
  }






  render(){
      return (

          <div>
                { this.state.response ? (
            <Home/>
          ): (
            <LandingPage/>
          )}
        </div>
      )
  }

}
