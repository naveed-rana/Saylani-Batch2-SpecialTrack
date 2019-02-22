import React, { Component } from 'react';
import './App.css';

const ContextApi = React.createContext({});
const ContextApiProvider = ContextApi.Provider;
const ContextApiConsumer = ContextApi.Consumer;

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>Parent</p>
        <ContextApiProvider value="my data">
         <Child />
         </ContextApiProvider>
      </div>
    );
  }
}

export default App;

//child components



class Child extends Component {
  render() {
    return (
      <div>
        <p>fist child</p>
        <ContextApiProvider value="my data new dat">
        <NestingChild />
         </ContextApiProvider>
       
      </div>
    )
  }
}


//nesting

class NestingChild extends Component {
  render() {
    return (
      <div>
        <p>nested child</p>
        <ContextApiConsumer>

          {context => <p>{context}</p>}

        </ContextApiConsumer>
      </div>
    )
  }
}

