import React, { Component } from 'react'
// set var called Component from React.Component
// const Component = React.Component

// class based component
class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = { term: ' '};
  }

  // always need a render function
  render(){ //slightly different syntax for creating a function
    return (
      <div>
        <input  onChange={ event => this.setState({ term: event.target.value }) } />
        Value of the input: { this.state.term }
      </div>
    );
  }
}

//State: JS object used to record and react to events.
// Each class based compent has it's own state object.
// Anytime a components state is changed it run the render function along with
// its child objects.

export default SearchBar;
