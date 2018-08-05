import React from 'react'
import HomeNavigation from './neighborhoods/Home Navigation.js'
import FavoriteWorkersView from './neighborhoods/Favorite Workers View.js'

export default class FavoriteWorkers extends React.Component {
      render() {
        return (
           <div className="favorite-workers">
             <HomeNavigation/><br />
             <FavoriteWorkersView/>
           </div>
         )
     }
}
