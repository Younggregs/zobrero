import React from 'react'
import SearchView from './neighborhoods/Search View.js'
import HomeNavigation from './neighborhoods/Home Navigation.js'

export default class Search extends React.Component {

      render() {

        return (
           <div className="search">
            <HomeNavigation search_view={true}/>
            <SearchView search_result= ""/>
           </div>
         )
     }
}
