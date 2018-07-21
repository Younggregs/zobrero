import React from 'react'
import HomeNavigation from './neighborhoods/Home Navigation'
import ProfileView from './neighborhoods/Profile View'


export default class Profile extends React.Component {

  state = {
    is_myprofile: true,
  }


  async componentDidMount() {


    const auth = localStorage.getItem('auth_code')
  
    try {
      const res = await fetch('http://198.187.30.71:8000/is_myprofile/' + this.props.match.params.profile_id, {
      
       credentials: 'same-origin',
       mode: 'cors',
       headers : {
         'Authorization' : 'Token ' + auth
       }

      })
      const is_myprofile = await res.json();
        this.setState({
          is_myprofile
        });
  
    } catch (e) {
      console.log(e);
    }
  }


      render() {
        return (
           <div className="profile">
             <HomeNavigation/>
             <ProfileView profile_id ={this.props.match.params.profile_id} is_myprofile={this.state.is_myprofile}/>
           </div>
         )
     }
}
