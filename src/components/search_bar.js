import React, { Component } from 'react'
// set var called Component from React.Component
// const Component = React.Component

// class based component
class SearchBar extends Component {
  // always need a render function
  render(){ //slightly different syntax for creating a function
    return <input  onChange={ event => console.log(event.target.value) } />;
  }
}

export default SearchBar;
