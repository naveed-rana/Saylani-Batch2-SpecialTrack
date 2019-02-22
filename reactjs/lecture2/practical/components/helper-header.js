import React, { Component } from 'react';
import Nested from './new'

class Helper extends Component {
  render() {
    return (
      <div className="App">
        {/* <h1>This is the Helper here.</h1> */}
        <Nested />
      </div>
    );
  }
}

export default Helper;
