// library imports
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

// component imports
import SearchBar from './components/search_bar';

// test API key - DISABLE or move to ENV Var
const API_Key = 'AIzaSyCae9rBWFqOXviUYTU1qB0XHmL1y5NMiMM'


// Create a new compent to produce hTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [1, 2, 3] };
    // console.log(this.state)

    YTSearch({key: API_Key, term: 'surfboards'}, (data) => {
      this.setState({ videos: data });
      console.log(this.state);
    });
  }

  render(){
    return <div>
      <SearchBar />
    </div>

  }
}

// Take this compent's generated HTML and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
