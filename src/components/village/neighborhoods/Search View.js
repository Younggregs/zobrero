import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Col, Row,Button, Form, Thumbnail, FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import ProfileInfo from './blocks/houses/Profile Info.js';
import BuzzMe from './blocks/houses/Buzz Me.js';
import DistanceFromYou from './blocks/houses/Distance From You.js';
import ProfileImage from './blocks/houses/Profile Image.js';
import ProfileOptions from './blocks/houses/Profile Options.js';


export default class SearchView extends React.Component {

  state = {
    search_result: [],
    search_phrase:"",
    is_search: false,
    };

    async searchResult() {
      var formData = new FormData()
      formData.append("search_phrase", this.state.search_phrase)

      try {
        const res = await fetch('http://198.187.30.71:8000/search/',{

        form :formData,
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
      var search_phrase = document.getElementById("search_phrase").value;
      this.setSearchPhrase(search_phrase);

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


     <div className="scrolling-wrapper-search">

     {this.state.search_result.map(item => (
      <div className="card-search">


      <Thumbnail src={ require ('./blocks/houses/images/web designer.jpg') } alt="client image">
      <ProfileInfo firstname={item.firstname} lastname={item.lastname} talent={item.talent}/>
      </Thumbnail>

      </div>


    ))}

    </div>

     
        </div>
      ) : (
        <span></span>
      )}

    </div>
      )
    
  }
}
