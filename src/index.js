import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Welcome from './components/village/Welcome'
import LandingPage from './components/village/Landing Page'
import Home from './components/village/Home'
import Help from './components/village/Help'
import SignIn from './components/village/Sign In'
import SignUp from './components/village/Sign Up'
import SignUpObrero from './components/village/Sign Up Obrero'
import Calls from './components/village/Calls'
import Profile from './components/village/Profile'
import Search from './components/village/Search'
import EditProfile from './components/village/Edit Profile'
import WorkHistory from './components/village/Work History'
import Review from './components/village/Review'
import FavoriteWorkers from './components/village/Favorite Workers'
import Notifications from './components/village/Notification'
import Phone from './components/village/Phone'
import Chats from './components/village/Chats'
import Logout from './components/village/Logout'

      class App extends React.Component {
        render() {
          return (
              <Router>
              <div>
                <Route exact path="/" component={Welcome}/>
                <Route exact path="/zobrero" component={LandingPage}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/help" component={Help}/>
                <Route exact path="/signin" component={SignIn}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route exact path="/signup_obrero" component={SignUpObrero}/>
                <Route exact path="/calls" component={Calls}/>
                <Route exact path="/chats" component={Chats}/>
                <Route exact path="/chats/:profile_id" component={Chats}/>
                <Route exact path="/phone" component={Phone}/>
                <Route exact path="/profile/:profile_id" component={Profile}/>
                <Route exact path="/search" component={Search}/>
                <Route exact path="/editprofile/:profile_id" component={EditProfile}/>
                <Route exact path="/work_history" component={WorkHistory}/>
                <Route exact path="/reviews" component={Review}/>
                <Route exact path="/favorite_workers" component={FavoriteWorkers}/>
                <Route exact path="/notification" component={Notifications}/>
                <Route exact path="/logout" component={Logout}/>
              </div>
            </Router>
           )
         }
       }

     ReactDOM.render(
       <App/>,
       document.getElementById('app')
     );
