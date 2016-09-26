// imports
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

// test API key - DISABLE or move to ENV Var
const API_Key = 'AIzaSyCae9rBWFqOXviUYTU1qB0XHmL1y5NMiMM'


// Create a new compent to produce hTML
const App = () => {
  return <div>
    <SearchBar />
  </div>
}

// Take this compent's generated HTML and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
