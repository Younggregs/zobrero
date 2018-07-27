import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Thumbnail, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import ProfileInfo from './blocks/houses/Profile Info.js';
import DistanceFromYou from './blocks/houses/Distance From You.js';
import ProfileImage from './blocks/houses/Profile Image.js';
import ProfileOptions from './blocks/houses/Profile Options.js';


export default class SearchView extends React.Component {

  state = {
    search_result: [],
    search_phrase:"",
    media: "",
    is_search: false,
    };

    async searchResult() {
      var formData = new FormData()
      formData.append("search_phrase", this.state.search_phrase)

      try {
        const res = await fetch('http://198.187.30.71:8000/search/',{

        body :formData,
        method: 'POST'

        });
        const search_result = await res.json();
        this.setState({
          search_result
        });

      } catch (e) {
        console.log(e);
      }
    }


    setSearchPhrase(search_phrase){
        this.state.search_phrase = search_phrase;
        this.state.is_search = true;
        this.searchResult();

    }

    getSearchPhrase(){
      var search_phrase = this.inputSearchPhrase.value;
      this.setSearchPhrase(search_phrase);

    }




    emptyResult(){

      var empty_set = false
    
      if(this.state.search_result.length <= 0 ){
        empty_set = true
      }
    
      return empty_set
      
    
    }


    setMedia(media){
      if(media != ""){
        this.state.media = 'http://198.187.30.71' + media
      }
       
    }


    gotMedia(){

      if(this.state.media == ""){
        return false
      }

      return true
    }
    


      render() {

        return (
        <div>

            <div className="search-box">
             <Form inline>
             <FormGroup>
              <InputGroup>
                <FormControl 
                  id="search_phrase"
                  type="text" 
                  name="search_phrase"
                  placeholder="Find help...  "
                  inputRef={(ref) => { this.inputSearchPhrase = ref; }}
                />

      
      <InputGroup.Button>
        <Button onClick={this.getSearchPhrase.bind(this)}><Glyphicon glyph="search"/></Button>
      </InputGroup.Button>
    </InputGroup>
  </FormGroup>
             </Form>
            </div>

          {this.state.is_search ? (

          <div className="search-view">

          {this.emptyResult() ? (

               <p className="err-msg">No result found for <i>{this.state.search_phrase}</i></p>
      
          ) : (

            <div className="scrolling-wrapper-search">

      {this.state.search_result.map(item => (
      <div className="card-search">
        {this.setMedia(item.dp)}

        {this.gotMedia() ? (
      <Thumbnail src= { `${this.props.media}` } alt="client image">
       <ProfileInfo id={item.account_id} firstname={item.firstname} lastname={item.lastname} phone={item.phone} talent={item.talent}/>
      </Thumbnail>
        ) : (
          <Thumbnail src={ require ('./blocks/houses/images/anonn.png') } alt="client image">
            <ProfileInfo id={item.account_id} firstname={item.firstname} lastname={item.lastname} phone={item.phone} talent={item.talent}/>
          </Thumbnail>
        )}

     

      </div>


    ))}

    </div>

          )} 


    

     
        </div>
      ) : (
        <span></span>
      )}

    </div>
      )
    
  }
}
