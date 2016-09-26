import React from 'react';
import ReactDOM from 'react-dom';

// Create a new compent to produce hTML
const App = () => {
  return <div> Hi! </div>
}

// Take this compent's generated HTML and put into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
